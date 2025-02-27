import { useRef, useState, useEffect } from 'react';
import screenfull from 'screenfull';
import useLatest from '../useLatest';
import { isBoolean } from '../utils';
import { BasicTarget, getTargetElement } from '../utils/domTarget';
import useMemoizedFn from '../useMemoizedFn';

export interface PageFullscreenOptions {
  className?: string;
  zIndex?: number;
}

export interface Options {
  onExit?: () => void;
  onEnter?: () => void;
  pageFullscreen?: boolean | PageFullscreenOptions;
}

export default function useFullscreen(target: BasicTarget, options: Options = {}) {
  const { onExit, onEnter, pageFullscreen } = options;
  const { className = 'hooks-page-fullscreen', zIndex = 999 } =
    isBoolean(pageFullscreen) || !pageFullscreen ? {} : pageFullscreen;

  const onExitRef = useLatest(onExit);
  const onEnterRef = useLatest(onEnter);

  const [state, setState] = useState(getIsFullscreen);
  const stateRef = useRef(getIsFullscreen());

  function getIsFullscreen() {
    return (
      screenfull.isEnabled &&
      !!screenfull.element &&
      screenfull.element === getTargetElement(target)
    );
  }

  function invokeCallback(isFullscreen: boolean) {
    if (isFullscreen) {
      onEnterRef.current?.();
    } else {
      onExitRef.current?.();
    }
  }

  function updateFullscreenState(fullscreen: boolean) {
    if (stateRef.current !== fullscreen) {
      invokeCallback(fullscreen);
      setState(fullscreen);
      stateRef.current = fullscreen;
    }
  }

  function onScreenfullChange() {
    updateFullscreenState(getIsFullscreen());
  }

  // 页面全屏样式
  function togglePageFullscreen(fullscreen: boolean) {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }
    let styleElem = document.getElementById(className);
    if (fullscreen) {
      // @ts-ignore
      el.classList.add(className);

      if (!styleElem) {
        styleElem = document.createElement('style');
        styleElem.setAttribute('id', className);
        styleElem.textContent = `.${className} {
          position: fixed; left: 0; top: 0; right: 0; bottom: 0;
            width: 100% !important; height: 100% !important;
            z-index: ${zIndex};
        }`;
        // @ts-ignore
        el.appendChild(styleElem);
      }
    } else {
      // @ts-ignore
      el.classList.remove(className);

      if (styleElem) {
        styleElem.remove();
      }
    }
    updateFullscreenState(fullscreen);
  }

  function enterFullscreen() {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    if (pageFullscreen) {
      togglePageFullscreen(true);
      return;
    }

    // 系统全屏
    if (screenfull.isEnabled) {
      try {
        // @ts-ignore
        screenfull.request(el);
      } catch (err) {
        console.error(err);
      }
    }
  }

  function exitFullscreen() {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }
    if (pageFullscreen) {
      togglePageFullscreen(false);
      return;
    }

    if (screenfull.isEnabled && screenfull.element === el) {
      screenfull.exit();
    }
  }

  function toggleFullscreen() {
    if (state) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  useEffect(() => {
    if (!screenfull.isEnabled || pageFullscreen) {
      return;
    }

    screenfull.on('change', onScreenfullChange);

    return () => {
      // @ts-ignore
      screenfull.off('change', onScreenfullChange);
    };
  }, []);

  return [
    state,
    {
      enterFullscreen: useMemoizedFn(enterFullscreen),
      exitFullscreen: useMemoizedFn(exitFullscreen),
      toggleFullscreen: useMemoizedFn(toggleFullscreen),
      isEnabled: screenfull.isEnabled,
    },
  ] as const;
}

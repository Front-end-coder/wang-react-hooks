import useLatest from '../useLatest';
import { BasicTarget, getTargetElement } from '../utils/domTarget';
import useDeepCompareWithTarget from '../utils/useDeepCompareWithTarget';

export default function useMutationObserver(
  callback: MutationCallback,
  target: BasicTarget,
  options: MutationObserverInit = {},
) {
  const callbackRef = useLatest(callback);

  useDeepCompareWithTarget(
    () => {
      const el = getTargetElement(target);
      if (!el) {
        return;
      }
      const observer = new MutationObserver(callbackRef.current);
      // @ts-ignore
      observer.observe(el, options);
      return () => {
        observer.disconnect();
      };
    },
    [options],
    target,
  );
}

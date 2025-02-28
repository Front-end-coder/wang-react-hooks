import useBoolean from '../useBoolean';
import useEventListener from '../useEventListener';
import { BasicTarget } from '../utils/domTarget';

export interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
  onChange?: (isHovering: boolean) => void;
}

export default function useHover(target: BasicTarget, options?: Options): boolean {
  const { onEnter, onLeave, onChange } = options || {};

  const [state, { setTrue, setFalse }] = useBoolean();

  useEventListener(
    'mouseenter',
    () => {
      onEnter?.();
      setTrue();
      onChange?.(true);
    },
    {
      target,
    },
  );
  useEventListener(
    'mouseleave',
    () => {
      onLeave?.();
      setFalse();
      onChange?.(false);
    },
    {
      target,
    },
  );

  return state;
}

import useLatest from '../useLatest';
import useEffectWithTarget from '../utils/useEffectWithTarget';
import { BasicTarget, getTargetElement } from '../utils/domTarget';
import getDocumentOrShadow from '../utils/getDocumentOrShadow';

type DocumentEventKey = keyof DocumentEventMap;
// 通过ref注册事件
export default function useClickAway<T extends Event = Event>(
  onClickAway: (event: T) => void,
  target: BasicTarget | BasicTarget[],
  eventName: DocumentEventKey | DocumentEventKey[] = 'click',
) {
  const onClickAwayRef = useLatest(onClickAway);

  useEffectWithTarget(
    () => {
      const handler = (event: any) => {
        const targets = Array.isArray(target) ? target : [target];
        // 排除自身执行事件
        if (
          targets.some((item) => {
            const targetElement = getTargetElement(item);
            // @ts-ignore
            return !targetElement || targetElement.contains(event.target);
          })
        ) {
          return;
        }
        onClickAwayRef.current(event);
      };
      const documentOrShadow = getDocumentOrShadow(target);
      const eventNames = Array.isArray(eventName) ? eventName : [eventName];
      eventNames.forEach((event) => {
        documentOrShadow.addEventListener(event, handler);
      });

      return () => {
        eventNames.forEach((event) => {
          documentOrShadow.removeEventListener(event, handler);
        });
      };
    },
    Array.isArray(eventName) ? eventName : [eventName],
    target,
  );
}

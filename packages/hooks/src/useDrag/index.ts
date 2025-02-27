import { useRef } from 'react';
import { BasicTarget, getTargetElement } from '../utils/domTarget';
import useLatest from '../useLatest';
import useMount from '../useMount';
import { isString } from '../utils';
import useEffectWithTarget from '../utils/useEffectWithTarget';

export interface Options {
  onDragStart?: (event: React.DragEvent) => void;
  onDragEnd?: (event: React.DragEvent) => void;
  // 拖动元素时生成的半透明图片
  dragImage?: {
    image: string | Element;
    offsetX?: number;
    offsetY?: number;
  };
}

export default function useDrug<T>(data: T, target: BasicTarget, options: Options = {}) {
  const optionsRef = useLatest(options);
  const dataRef = useLatest(data);
  const imageElementRef = useRef<Element>();

  const { dragImage } = optionsRef.current;

  useMount(() => {
    if (dragImage?.image) {
      const { image } = dragImage;

      if (isString(image)) {
        const imageElement = new Image();

        imageElement.src = image;
        imageElementRef.current = imageElement;
      } else {
        imageElementRef.current = image;
      }
    }
  });

  useEffectWithTarget(
    () => {
      const targetElement = getTargetElement(target);
      if (!targetElement?.addEventListener) {
        return;
      }
      const onDragStart = (event: React.DragEvent) => {
        optionsRef.current.onDragStart?.(event);
        event.dataTransfer.setData('custom', JSON.stringify(dataRef.current));

        if (dragImage.image && imageElementRef.current) {
          const { offsetX = 0, offsetY = 0 } = dragImage;
          event.dataTransfer.setDragImage(imageElementRef.current, offsetX, offsetY);
        }
      };

      const onDragEnd = (event: React.DragEvent) => {
        optionsRef.current.onDragEnd?.(event);
      };

      // @ts-ignore
      targetElement.setAttribute('draggable', 'true');

      targetElement.addEventListener('dragstart', onDragStart as any);
      targetElement.addEventListener('dragend', onDragEnd as any);

      return () => {
        targetElement.removeEventListener('dragstart', onDragStart as any);
        targetElement.removeEventListener('dragend', onDragEnd as any);
      };
    },
    [],
    target,
  );
}

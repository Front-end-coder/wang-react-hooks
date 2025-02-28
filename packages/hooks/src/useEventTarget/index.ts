import { useState, useCallback } from 'react';
import useLatest from '../useLatest';
import { isFunction } from 'lodash';

interface EventTarget<U> {
  target: {
    value: U;
  };
}

export interface Options<T, U> {
  initialValue?: T;
  transformer?: (value: U) => T;
}

export default function useEventTarget<T, U = T>(options?: Options<T, U>) {
  const { initialValue, transformer } = options || {};
  const [value, setValue] = useState(initialValue);

  const transformerRef = useLatest(transformer);

  const reset = useCallback(() => setValue(initialValue), []);

  const onChange = useCallback((e: EventTarget<U>) => {
    const _value = e.target.value;
    if (isFunction(transformerRef.current)) {
      return setValue(transformerRef.current(_value));
    }
    return setValue(_value as unknown as T);
  }, []);

  return [value, { onChange, reset }] as const;
}

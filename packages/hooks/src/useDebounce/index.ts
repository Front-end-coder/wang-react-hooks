import { useEffect, useState } from 'react';
import { DebounceOptions } from './debounceOptions';
import useDebounceFn from '../useDebounceFn';

export default function useDebounce<T>(value: T, options: DebounceOptions) {
  const [debounced, setDebounced] = useState(value);

  const { run } = useDebounceFn(() => {
    setDebounced(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return debounced;
}

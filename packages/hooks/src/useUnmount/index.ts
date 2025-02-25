import { useEffect } from 'react';
import useLatest from '../useLatest';
import isDev from '../utils/isDev';
import { isFunction } from '../utils';

type noop = (...args: any[]) => any;
export default function useUnmount<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }
  const fnRef = useLatest(fn);
  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
}

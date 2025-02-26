import { useState, useEffect } from 'react';
import { ThrottleOptions } from './throttleOptions';
import useThrottleFn from '../useThrottleFn';

export default function useThrottle<T>(value: T, options: ThrottleOptions) {
  const [throttled, setThrottled] = useState(value);

  const { run } = useThrottleFn(() => {
    setThrottled(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return throttled;
}

import { useEffect } from 'react';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

export default function useMount(fn: () => void) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useEffect(() => {
    fn?.();
  }, []);
}

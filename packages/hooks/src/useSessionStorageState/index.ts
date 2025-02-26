import { createUseStorageState } from '../createUseStorageState';
import isBrowser from '../utils/isBrowser';

const useSessionStorageState = createUseStorageState(() =>
  isBrowser ? window.sessionStorage : undefined,
);
export default useSessionStorageState;

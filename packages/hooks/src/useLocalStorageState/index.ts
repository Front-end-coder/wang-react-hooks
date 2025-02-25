import { createUseStorageState } from '../createUseStorageState';
import isBrowser from '../utils/isBrowser';

const useLocalStorageState = createUseStorageState(() =>
  isBrowser ? window.localStorage : undefined,
);
export default useLocalStorageState;

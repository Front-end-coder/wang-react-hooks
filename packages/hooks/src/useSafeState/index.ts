import { useState, useCallback, type Dispatch, type SetStateAction } from 'react';
import useUnmountedRef from '../useUnmountedRef';

export function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
export function useSafeState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
];
export default function useSafeState<S>(initalState?: S | (() => S)) {
  const unmountedRef = useUnmountedRef();
  const [state, setState] = useState(initalState);
  const setCurrentState = useCallback((currentState) => {
    if (unmountedRef.current) return;
    setState(currentState);
  });

  return [state, setCurrentState];
}

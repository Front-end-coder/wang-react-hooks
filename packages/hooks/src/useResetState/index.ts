import { type Dispatch, type SetStateAction, useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';

type ResetState = () => void;
export default function useResetState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, ResetState] {
  const [state, setState] = useState(initialState);

  const resetState = useMemoizedFn(() => {
    setState(initialState);
  });

  return [state, setState, resetState];
}

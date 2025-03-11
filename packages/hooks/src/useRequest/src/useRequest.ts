import { Options, Plugin, Service } from './types';
import useRequestImplement from './useRequestImplement';
import useLoadingDelayPlugin from './plugins/useLoadingDelayPlugin';

function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[],
) {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
    useLoadingDelayPlugin,
  ] as Plugin<TData, TParams>[]);
}

export default useRequest;

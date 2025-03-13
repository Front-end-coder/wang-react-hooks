import { Options, Plugin, Service } from './types';
import useRequestImplement from './useRequestImplement';
import useLoadingDelayPlugin from './plugins/useLoadingDelayPlugin';
import usePollingPlugins from './plugins/usePollingPlugins';

function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[],
) {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
    useLoadingDelayPlugin,
    usePollingPlugins,
  ] as Plugin<TData, TParams>[]);
}

export default useRequest;

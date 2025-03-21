import { Options, Plugin, Service } from './types';
import useRequestImplement from './useRequestImplement';
import useLoadingDelayPlugin from './plugins/useLoadingDelayPlugin';
import usePollingPlugins from './plugins/usePollingPlugins';
import useAutoRunPlugin from './plugins/useAutoRunPlugin';
import useRefreshOnWindowFocusPlugin from './plugins/useRefreshOnWindowFocusPlugin';
import useDebouncePlugin from './plugins/useDebouncePlugin';
import useThrottlePlugin from './plugins/useThrottlePlugin';
import useCachePlugin from './plugins/useCachePlugin';
import useRetryPlugin from './plugins/useRetryPlugin';

function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[],
) {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
    useLoadingDelayPlugin,
    usePollingPlugins,
    useAutoRunPlugin,
    useRefreshOnWindowFocusPlugin,
    useDebouncePlugin,
    useThrottlePlugin,
    useCachePlugin,
    useRetryPlugin,
  ] as Plugin<TData, TParams>[]);
}

export default useRequest;

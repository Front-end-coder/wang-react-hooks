import { Options, Plugin, Service } from './type';
import useRequestImplement from './useRequestImplement';

function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[],
) {
  return useRequestImplement<TData, TParams>(service, options, [...[plugins || []]]);
}

export default useRequest;

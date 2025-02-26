import type { useEffect, useLayoutEffect, DependencyList, EffectCallback } from 'react';
import { useRef } from 'react';
import { BasicTarget, getTargetElement } from './domTarget';
import depsAreSame from './depsAreSame';
import useUnmount from '../useUnmount';

export default function createEffectWithTarget(
  useEffectType: typeof useEffect | typeof useLayoutEffect,
) {
  return (
    effect: EffectCallback,
    deps: DependencyList,
    target: BasicTarget<any> | BasicTarget<any>[],
  ) => {
    // 标记是否是初始化
    const hasInitRef = useRef(false);

    // 上一次的目标元素和依赖项
    const lastElementRef = useRef<(Element | null)[]>(null);
    const lastDepsRef = useRef<DependencyList>([]);

    // 存储副作用函数
    const unLoadRef = useRef<any>();

    useEffectType(() => {
      const targets = Array.isArray(target) ? target : [target];
      const els = targets.map((item) => getTargetElement(item));

      // 初始化
      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();

        return;
      }

      if (
        els.length !== lastElementRef.current.length ||
        !depsAreSame(els, lastElementRef.current) ||
        !depsAreSame(deps, lastDepsRef.current)
      ) {
        unLoadRef.current?.();
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });
    useUnmount(() => {
      unLoadRef.current?.();
      hasInitRef.current = false;
    });
  };
}

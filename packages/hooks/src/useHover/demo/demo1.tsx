/**
 * title: 基础用法
 * description: 使用 ref 设置需要监听的元素。
 */

import React, { useRef } from 'react';
import { useHover } from 'wang-react-hooks';

export default () => {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  return <div ref={ref}>{isHovering ? 'hover' : 'leaveHover'}</div>;
};

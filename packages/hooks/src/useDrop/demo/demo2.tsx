/**
 * title: 自定义拖拽图像
 * description: 自定义拖拽过程中跟随鼠标指针的图像。
 */

import React, { useRef } from 'react';
import { useDrag } from 'wang-react-hooks';

const COMMON_STYLE: React.CSSProperties = {
  border: '1px solid #e8e8e8',
  height: '50px',
  lineHeight: '50px',
  padding: '16px',
  textAlign: 'center',
  marginRight: '16px',
};

export default () => {
  const dragRef = useRef(null);

  useDrag('', dragRef, {
    dragImage: {
      image: '/wang-react-hooks/logo.svg',
    },
  });

  return (
    <div ref={dragRef} style={{ display: 'flex' }}>
      <img style={COMMON_STYLE} src="/wang-react-hooks/logo.png" />
      <div style={COMMON_STYLE}>drag me</div>
    </div>
  );
};

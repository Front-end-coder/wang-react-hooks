/**
 * title: 基础用法
 * description: 获取鼠标位置。
 */

import { useMouse } from 'wang-react-hooks';
import React from 'react';

export default () => {
  const mouse = useMouse();

  return (
    <div>
      <p>
        Client - x: {mouse.clientX}, y: {mouse.clientY}
      </p>
      <p>
        Page - x: {mouse.pageX}, y: {mouse.pageY}
      </p>
      <p>
        Screen - x: {mouse.screenX}, y: {mouse.screenY}
      </p>
    </div>
  );
};

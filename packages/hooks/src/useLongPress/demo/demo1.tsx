/**
 * title: 基础用法
 * description: 请长按按钮查看效果。
 */

import React, { useState, useRef } from 'react';
import { useLongPress } from 'wang-react-hooks';

export default () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useLongPress(() => setCounter((s) => s + 1), ref);

  return (
    <div>
      <button ref={ref} type="button">
        Press me
      </button>
      <p>counter: {counter}</p>
    </div>
  );
};

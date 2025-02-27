/**
 * title: 支持 shadow DOM
 * description: 将 addEventListener 添加到 shadow DOM root
 */

import React, { useState, useRef } from 'react';
import { useClickAway } from 'wang-react-hooks';
import root from 'react-shadow';

export default () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  useClickAway(
    () => {
      setCounter((s) => s + 1);
    },
    ref,
    ['click', 'contextmenu'],
  );

  return (
    <root.div>
      <div>
        <button type="button" ref={ref}>
          box
        </button>
        <p>counter: {counter}</p>
      </div>
    </root.div>
  );
};

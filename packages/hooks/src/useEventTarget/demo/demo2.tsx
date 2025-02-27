/**
 * title: 自定义转换函数
 * description: 只能输入数字的 input 组件
 */

import React from 'react';
import { useEventTarget } from 'wang-react-hooks';

export default () => {
  const [value, { onChange, reset }] = useEventTarget({
    initialValue: '',
    transformer: (val: string) => val.replace(/[^\d]/g, ''),
  });

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        style={{ width: 200, marginRight: 20 }}
        placeholder="Please type here"
      />
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
};

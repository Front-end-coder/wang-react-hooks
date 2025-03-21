/**
 * title: 基础用法
 * description: ThrottledValue 每隔 500ms 变化一次。
 */

import React, { useState } from 'react';
import { useThrottle } from 'wang-react-hooks';

export default () => {
  const [value, setValue] = useState<string>();
  const throttledValue = useThrottle(value, { wait: 500 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>throttledValue: {throttledValue}</p>
    </div>
  );
};

/**
 * title: 基础用法
 * description: DebouncedValue 只会在输入结束 500ms 后变化。
 */

import React, { useState } from 'react';
import { useDebounce } from 'wang-react-hooks';

export default () => {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  );
};

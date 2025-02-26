import React from 'react';
import { useBoolean } from 'wang-react-hooks';

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean();
  return (
    <div>
      <p>Effects: {JSON.stringify(state)}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </button>
        <button type="button" onClick={setTrue}>
          Set true
        </button>
      </p>
    </div>
  );
};

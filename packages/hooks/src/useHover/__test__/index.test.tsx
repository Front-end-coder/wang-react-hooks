import React from 'react';
import { renderHook, act, render, fireEvent } from '@testing-library/react';
import useHover from '../index';

describe('useHover', () => {
  it('should work', () => {
    // getByText 根据文本查找元素
    const { getByText } = render(<button>Hover</button>);
    let trigger = 0;
    const { result } = renderHook(() =>
      useHover(getByText('Hover'), {
        onEnter: () => {
          trigger++;
        },
        onLeave: () => {
          trigger++;
        },
      }),
    );

    expect(result.current).toBe(false);

    // fireEvent给指定元素触发事件
    act(() => fireEvent.mouseEnter(getByText('Hover')));
    expect(result.current).toBe(true);
    expect(trigger).toBe(1);

    act(() => fireEvent.mouseLeave(getByText('Hover')));
    expect(result.current).toBe(false);
    expect(trigger).toBe(2);
  });
});

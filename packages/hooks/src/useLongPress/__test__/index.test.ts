import { renderHook } from '@testing-library/react';
import useLongPress from '../index';
import type { Options } from '../index';

const mockCallback = jest.fn();
const mockClickCallback = jest.fn();
const mockLongPressEndCallback = jest.fn();

let events: { [key: string]: any } = {};
const mockTarget = {
  addEventListener: jest.fn((event, callback) => {
    events[event] = callback;
  }),
  removeEventListener: jest.fn((event) => {
    Reflect.deleteProperty(events, event);
  }),
};

const setup = (onLongPress: any, target, options?: Options) =>
  renderHook(() => useLongPress(onLongPress, target, options));

describe('useLongPress', () => {
  beforeEach(() => {
    // 切换定时器为jest中的自定义定时器
    jest.useFakeTimers();
  });
  afterEach(() => {
    events = {};
    // 恢复真实定时器
    jest.useRealTimers();
  });
  it('longPress callback correct', () => {
    setup(mockCallback, mockTarget, {
      onClick: mockClickCallback,
      onLongPressEnd: mockLongPressEndCallback,
    });
    expect(mockTarget.addEventListener).toHaveBeenCalled();
    events.mousedown();
    jest.advanceTimersByTime(350);
    events.mouseup();
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockLongPressEndCallback).toHaveBeenCalledTimes(1);
    expect(mockClickCallback).toHaveBeenCalledTimes(0);
  });
  it('longPress and click callback correct', () => {
    setup(mockCallback, mockTarget, {
      onClick: mockClickCallback,
      onLongPressEnd: mockLongPressEndCallback,
    });
    expect(mockTarget.addEventListener).toHaveBeenCalled();
    events.mousedown();
    jest.advanceTimersByTime(350);
    events.mouseup();
    events.mousedown();
    events.mouseup();
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockLongPressEndCallback).toHaveBeenCalledTimes(1);
    expect(mockClickCallback).toHaveBeenCalledTimes(1);
  });
  it('onLongPress should not be called when over the threshold', () => {
    const { unmount } = setup(mockCallback, mockTarget, {
      moveThreshold: {
        x: 30,
        y: 20,
      },
    });
    expect(events.mousemove).toBeDefined();
    events.mousedown(new MouseEvent('mousedown'));
    events.mousemove(
      new MouseEvent('mousemove', {
        clientX: 40,
        clientY: 10,
      }),
    );
    jest.advanceTimersByTime(320);
    expect(mockCallback).not.toHaveBeenCalled();

    unmount();
    expect(events.mousemove).toBeUndefined();
  });
  it(`should not work when target don't support addEventListener method`, () => {
    Object.defineProperty(mockTarget, 'addEventListener', {
      get() {
        return false;
      },
    });

    setup(() => {}, mockTarget);
    expect(Object.keys(events)).toHaveLength(0);
  });
});

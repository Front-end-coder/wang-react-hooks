import { renderHook } from '@testing-library/react';
import type { Options } from '../index';
import useDrag from '../index';
import type { BasicTarget } from '../../utils/domTarget';

const setup = <T>(data: T, target: BasicTarget, options?: Options) =>
  renderHook((newData: T) => useDrag(newData || data, target, options));

const events: Record<string, (event: any) => void> = {};
const mockTarget = {
  addEventListener: jest.fn((event, callback) => {
    events[event] = callback;
  }),
  removeEventListener: jest.fn((event) => {
    Reflect.deleteProperty(events, event);
  }),
  setAttribute: jest.fn(),
};

describe('useDrag', () => {
  // it('should add/remove listener on mount/unmount', () => {
  //   const { unmount } = setup(1, mockTarget as any);
  //   expect(mockTarget.addEventListener).toHaveBeenCalled();
  //   expect(mockTarget.addEventListener.mock.calls[0][0]).toBe('dragstart');
  //   expect(mockTarget.addEventListener.mock.calls[1][0]).toBe('dragend');
  //   expect(mockTarget.setAttribute).toHaveBeenCalledWith('draggable', 'true');
  //   unmount();
  //   expect(mockTarget.removeEventListener).toHaveBeenCalled();
  // });
  // it('should triggle drag callback', () => {
  //   const onDragStart = jest.fn();
  //   const onDragEnd = jest.fn();
  //   const mockEvent = {
  //     dataTransfer: {
  //       setData: jest.fn(),
  //     },
  //   };
  //   const hook = setup(1, mockTarget as any, {
  //     onDragStart,
  //     onDragEnd,
  //   });
  //   events.dragstart(mockEvent);
  //   expect(onDragStart).toHaveBeenCalled();
  //   expect(mockEvent.dataTransfer.setData).toHaveBeenCalledWith('custom', '1');
  //   events.dragend(mockEvent);
  //   expect(onDragEnd).toHaveBeenCalled();

  //   hook.rerender(2);
  //   events.dragstart(mockEvent);
  //   expect(onDragStart).toHaveBeenCalled();
  //   expect(mockEvent.dataTransfer.setData).toHaveBeenLastCalledWith('custom', '2');
  //   events.dragend(mockEvent);
  //   expect(onDragEnd).toHaveBeenCalled();
  // });
  it(`should not work when target don't support addEventListener method`, () => {
    Object.defineProperty(mockTarget, 'addEventListener', {
      get() {
        return false;
      },
    });
    setup(1, mockTarget as any);
    expect(mockTarget.setAttribute).not.toBeCalled();
  });
});

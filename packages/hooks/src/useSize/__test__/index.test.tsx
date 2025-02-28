import React, { useRef } from 'react';
import { renderHook, act, render, screen } from '@testing-library/react';
import useSize from '../index';

let callback;
jest.mock('resize-observer-polyfill', () => {
  return jest.fn().mockImplementation((cb) => {
    callback = cb;
    return {
      observe: () => {},
      disconnect: () => {},
    };
  });
});
function Setup() {
  const ref = useRef(null);
  const size = useSize(ref);

  return (
    <div ref={ref}>
      <div>width: {String(size?.width)}</div>
      <div>height: {String(size?.height)}</div>
    </div>
  );
}
describe('useSize', () => {
  it('should work when target is a mounted DOM', () => {
    const hook = renderHook(() => useSize(document.body));
    expect(hook.result.current).toEqual({ height: 0, width: 0 });
  });
  it('should work when target is a `MutableRefObject`', async () => {
    const mockRaf = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: FrameRequestCallback) => {
        cb(0);
        return 0;
      });

    render(<Setup />);
    // @ts-ignore
    expect(await screen.findByText(/^width/)).toHaveTextContent('width: undefined');
    // @ts-ignore
    expect(await screen.findByText(/^height/)).toHaveTextContent('height: undefined');

    act(() =>
      callback([
        {
          target: {
            clientWidth: 10,
            clientHeight: 10,
          },
        },
      ]),
    );
    // @ts-ignore
    expect(await screen.findByText(/^width/)).toHaveTextContent('width: 10');
    // @ts-ignore
    expect(await screen.findByText(/^height/)).toHaveTextContent('height: 10');
    mockRaf.mockRestore();
  });
});

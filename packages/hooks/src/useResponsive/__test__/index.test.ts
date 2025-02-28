import { renderHook, act } from '../../utils/tests';
import { useResponsive } from '../';

function changeWidth(width: number) {
  act(() => {
    (global as any).innerWidth = width;
    (global as any).dispatchEvent(new Event('resize'));
  });
}

const hook = renderHook(() => useResponsive());

describe('useResponsive', () => {
  it('should response to window width changes', () => {
    changeWidth(1024);
    expect(hook.result.current).toMatchSnapshot();
    changeWidth(300);
    expect(hook.result.current).toMatchSnapshot();
    changeWidth(700);
    expect(hook.result.current).toMatchSnapshot();
    changeWidth(800);
    expect(hook.result.current).toMatchSnapshot();
    changeWidth(1000);
    expect(hook.result.current).toMatchSnapshot();
    changeWidth(1200);
    expect(hook.result.current).toMatchSnapshot();
  });
});

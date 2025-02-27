import useDocumentVisibility from '../index';
import { renderHook, act } from '@testing-library/react';

const mockIsBrowser = jest.fn(); // 创建一个 Jest 模拟函数，用于模拟判断是否为浏览器环境的函数。
// 使用 jest.spyOn 创建一个间谍，用于模拟 document.visibilityState 的 getter 方法，以便在测试中控制其返回值。
const mockDocumentVisibilityState = jest.spyOn(document, 'visibilityState', 'get');

// 使用 jest.mock 模拟 ../../utils/isBrowser 模块，使其返回 mockIsBrowser 函数的返回值，这样可以在测试中灵活控制是否为浏览器环境。
jest.mock('../../utils/isBrowser', () => {
  return {
    __esModule: true,
    get default() {
      return mockIsBrowser();
    },
  };
});

// 在所有测试用例执行完毕后，使用 jest.clearAllMocks 清理所有模拟函数和间谍的状态，确保每个测试用例之间相互独立。
afterAll(() => {
  jest.clearAllMocks();
});
describe('useDocumentVisibility', () => {
  // 测试非浏览器环境下的表现，直接返回visible
  it('isBrowser effect corrent', async () => {
    mockDocumentVisibilityState.mockReturnValue('hidden');
    mockIsBrowser.mockReturnValue(false);
    const { result } = renderHook(() => useDocumentVisibility());
    expect(result.current).toBe('visible');
  });
  // 测试浏览器环境下处理 visibilitychange 事件的表现
  it('visibilitychange update correct ', async () => {
    mockDocumentVisibilityState.mockReturnValue('hidden');
    mockIsBrowser.mockReturnValue(true);
    const { result } = renderHook(() => useDocumentVisibility());
    expect(result.current).toBe('hidden');
    mockDocumentVisibilityState.mockReturnValue('visible');
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'));
    });
    expect(result.current).toBe('visible');
  });
});

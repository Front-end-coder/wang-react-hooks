---
nav: Hooks
group:
  title: 状态
  order: 1
---

# useSetState

管理 object 类型 state 的 Hooks，用法与 class 组件的 `this.setState` 基本一致。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx"></code>

### 使用回调更新

<code src="./demo/demo2.tsx"></code>

## API

```typescript
const [state, setState] = useSetState<T>(initialState);
```

### Result

| 参数     | 说明         | 类型                                                                                      | 默认值 |
| -------- | ------------ | ----------------------------------------------------------------------------------------- | ------ |
| state    | 当前状态     | `T`                                                                                       | -      |
| setState | 设置当前状态 | `(state: Partial<T> \| null) => void` \| `((prevState: T) => Partial<T> \| null) => void` | -      |

### Params

| 参数         | 说明     | 类型           | 默认值 |
| ------------ | -------- | -------------- | ------ |
| initialState | 初始状态 | `T \| () => T` | -      |

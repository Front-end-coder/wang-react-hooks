---
nav: Hooks
group:
  title: 生命周期
  order: 3
---

# useMount

只在组件初始化时执行的 Hook。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

## API

```typescript
useMount(fn: () => void);
```

### 参数

| 参数 | 说明               | 类型         | 默认值 |
| ---- | ------------------ | ------------ | ------ |
| fn   | 初始化时执行的函数 | `() => void` | -      |

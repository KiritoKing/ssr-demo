# react-ssr-demo

这是一个关于在 React 中使用 _服务器端渲染 (Server-Side Rendering)_ 的简单演示，可以作为一个可用的 SSR 框架。

我们使用了以下工具：

- _pnpm_: 目前最好的包管理器
- _webpack_: 用于解析依赖关系并生成捆绑包
- _babel_: 用于将 React 转换为 JavaScript
- _redux_: 用于管理全局状态
- _react-router_: 用于前端和后端路由

### 分支

- main: 最简单的 SSR 演示
- feat_router: 带有 `react-router` 的 SSR
- feat_redux: 带有 `redux` 的 SSR
- feat_thunk: 带有数据预取的 SSR

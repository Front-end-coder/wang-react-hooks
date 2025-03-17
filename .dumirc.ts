/**
 * @type import('dumi)
 */
import { defineConfig } from 'dumi';
import { hooks, useRequestDocs } from './config/sidebar';

export default defineConfig({
  base: '/wang-react-hooks/',
  publicPath: '/wang-react-hooks/',
  hash: true,
  favicons: ['/wang-react-hooks/logo.png'],
  themeConfig: {
    name: 'wang',
    logo: '/wang-react-hooks/logo.png',
    showLineNum: true,
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: '基础',
        link: '/hooks/use-boolean',
        activePath: '/hooks',
      },
      {
        title: '请求',
        link: '/request-docs/index',
        activePath: '/request-docs',
      },
    ],
    sidebar: {
      '/request-docs': useRequestDocs,
      '/hooks': hooks,
    },
  },
  alias: {
    'wang-react-hooks': process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    // 约定式路由的根目录配置,容易犯错的点，路由一定是复数形式，写request-doc也会生成request-docs
    atomDirs: [
      { type: 'hooks', dir: 'packages/hooks/src' },
      { type: 'request-docs', dir: 'packages/hooks/src/useRequest/docs' },
    ],
  },
});

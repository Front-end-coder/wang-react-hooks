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
        title: 'Hooks',
        link: '/hooks/use-boolean',
        activePath: '/hooks',
      },
    ],
    sidebar: {
      '/hooks': hooks,
      '/hooks/use-request/docs': useRequestDocs,
    },
  },
  alias: {
    'wang-react-hooks': process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    // 约定式路由的根目录配置
    atomDirs: [
      { type: 'hooks', dir: 'packages/hooks/src' },
      { type: 'hooks/use-request/docs', dir: 'packages/hooks/src/useRequest/docs' },
    ],
  },
});

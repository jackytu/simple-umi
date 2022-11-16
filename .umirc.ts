import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'Portal',
  links: [{ rel: 'icon', href: '/img/favicon.ico' }],
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});

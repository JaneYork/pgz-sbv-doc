export default [
  {
    path: 'vue/intro',
    meta: { enTitle: 'Intro', title: '简介', category: 'intro' },
    component: () => import('../vueDocs/introduction.zh-CN.md'),
  },
  {
    path: 'vue/intro-cn',
    meta: { enTitle: 'Intro', title: '1.简介', category: 'intro' },
    component: () => import('../vueDocs/introduction.zh-CN.md'),
  },
  {
    path: 'vue/faq-cn',
    meta: { enTitle: 'Intro', title: '常见问题', category: 'intro' },
    component: () => import('../vueDocs/常见问题.zh-CN.md'),
  },
  {
    path: 'vue/quick-cn',
    meta: { enTitle: 'System', type: '快速了解', title: '系统功能一览', category: 'intro' },
    component: () => import('../vueDocs/系统功能一览.zh-CN.md'),
  },
  {
    path: 'vue/tech-cn',
    meta: { enTitle: 'Tech', type: '快速了解', title: '技术选型及软件架构图', category: 'intro' },
    component: () => import('../vueDocs/tech.md'),
  },
  {
    path: 'vue/fe-cn',
    meta: { enTitle: 'Charts', type: '前端手册', title: '图表示例', category: 'intro' },
    component: () => import('../vueDocs/frontend.zh-CN.md'),
  },
  {
    path: 'vue/changelog-cn',
    meta: { enTitle: 'Change Log', type: '其他', title: '更新日志', category: 'intro' },
    component: () => import('../vueDocs/CHANGELOG.zh-CN.md'),
  },
  {
    path: 'vue/welfare-cn',
    meta: { enTitle: 'Welfare', type: '其他', title: '服务器购买', category: 'intro' },
    component: () => import('../vueDocs/welfare.zh-CN.md'),
  },
];

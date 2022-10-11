export default [
  {
    path: 'vue/intro',
    meta: { enTitle: 'Intro', title: '简介', category: 'intro' },
    component: () => import('../vueDocs/introduction.zh-CN.md'),
  },
  {
    path: 'vue/intro-cn',
    meta: { enTitle: 'Intro', title: '简介', category: 'intro' },
    component: () => import('../vueDocs/introduction.zh-CN.md'),
  },
  {
    path: 'vue/faq-cn',
    meta: { enTitle: 'Intro', title: '常见问题', category: 'intro' },
    component: () => import('../vueDocs/常见问题.zh-CN.md'),
  },
  {
    path: 'vue/quick-cn',
    meta: {
      enTitle: 'System',
      type: '我们的优势',
      title: '系统功能一览',
      category: 'intro',
      order: 2,
    },
    component: () => import('../vueDocs/系统功能一览.zh-CN.md'),
  },
  {
    path: 'vue/secret-cn',
    meta: {
      enTitle: 'Secret',
      type: '我们的优势',
      title: '安全性方案',
      category: 'intro',
      order: 4,
    },
    component: () => import('../vueDocs/安全性方案.zh-CN.md'),
  },
  {
    path: 'vue/sysDetail-cn',
    meta: { enTitle: 'Secret', type: '我们的优势', title: '模块功能详览', category: 'intro' },
    component: () => import('../vueDocs/模块功能详览.zh-CN.md'),
  },
  {
    path: 'vue/code-cn',
    meta: { enTitle: 'Code', type: '我们的优势', title: '高质量强规范', category: 'intro' },
    component: () => import('../vueDocs/开发规范.zh-CN.md'),
  },
  {
    path: 'vue/tech-cn',
    meta: {
      enTitle: 'Tech',
      type: '我们的优势',
      title: '技术选型及软件架构图',
      category: 'intro',
      order: 3,
    },
    component: () => import('../vueDocs/tech.md'),
  },
  {
    path: 'vue/fe-cn',
    meta: { enTitle: 'Charts', type: '前端手册', title: '图表示例', category: 'intro' },
    component: () => import('../vueDocs/frontend.zh-CN.md'),
  },
  {
    path: 'vue/callExe-cn',
    meta: { enTitle: 'Charts', type: '前端手册', title: '唤起客户端', category: 'intro' },
    component: () => import('../vueDocs/前端唤起EXE.zh-CN.md'),
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

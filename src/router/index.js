const routes = [
  {
    path: '/',
    name: 'guide',
    component: require('../content/guide.vue').default
  },
  {
    path: '/content',
    name: 'content',
    component: require('../content/index.vue').default,
    children: [
      {
        path: 'test',
        component: require('../content/test/index.vue').default
      }
    ]
  }
]

export default routes;
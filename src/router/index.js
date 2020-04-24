const routes = [
  {
    path: '/',
    name: 'guide',
    component: require('../content/guide.vue').default
  },
  {
    path: '/content',
    name: 'content',
    component: () => import(/* webpackChunkName: "notes" */'../content/index.vue'),
    children: [
      {
        path: 'test',
        component: () => import(/* webpackChunkName: "notes" */'../content/test/index.vue')
      }
    ]
  },
  // {
  //   path: '/try',
  //   name: 'try',
  //   component: require('../content/css-cases/loading.vue').default
  // }
]

export default routes;
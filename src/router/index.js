const routes = [
  {
    path: '/',
    name: 'guide',
    component: require('../content/guide.vue').default
  },
  {
    path: '/note',
    name: 'note',
    component: () => import(/* webpackChunkName: "notes" */'../content/note.vue')
  },
  // {
  //   path: '/try',
  //   name: 'try',
  //   component: require('../content/css-cases/loading.vue').default
  // }
]

export default routes;
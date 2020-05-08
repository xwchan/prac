const routes = [
  {
    path: '/',
    name: 'root',
    component: require('../notes/index.vue').default
  },
  {
    path: '/note',
    name: 'note',
    component: () => import(/* webpackChunkName: "notes" */'../notes/index.vue')
  }
]

export default routes;
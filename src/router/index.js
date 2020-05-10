const routes = [
  {
    path: '/note',
    name: 'note',
    component: () => import(/* webpackChunkName: "notes" */'../notes/index.vue')
  }
]

export default routes;
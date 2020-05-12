const routes = [

  {
    path: '/note',
    name: 'note',
    component: () => import(/* webpackChunkName: "notes" */'../notes/index.vue')
  },
  {
    path: '/css-case',
    name: 'css-case',
    component: () => import('../content/css-case.vue')
  }
]

export default routes;
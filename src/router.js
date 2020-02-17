import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/create'
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('./views/Create.vue')
    },
    {
      path: '/manage',
      name: 'Manage',
      component: () => import('./views/Manage.vue')
    }
  ]
})
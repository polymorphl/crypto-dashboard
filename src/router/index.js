import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import DashBody from '@/components/DashBody'
import DashSelected from '@/components/DashSelected'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
      path: '',
      component: DashBody
    },
    {
      path: '/:id',
      component: DashSelected
    }
  ]
})

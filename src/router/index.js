import Vue from 'vue'
import Router from 'vue-router'
import Mass from '@/components/mass/Mass'
import Church from '@/components/church/Church'
import CreateChurch from '@/components/church/CreateChurch'
import EditChurch from '@/components/church/EditChurch'
import Login from '@/components/login/Login'
import Dashboard from '@/components/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Mass
    },
    {
      path: '/misas',
      name: 'mass',
      component: Mass
    },
    {
      path: '/iglesias',
      name: 'churches',
      component: Church
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/iglesias/nuevo',
      name: 'create-church',
      component: CreateChurch
    },
    {
      path: '/iglesias/edit/:id',
      name: 'edit-church',
      component: EditChurch,
      props: true
    }
  ]
})

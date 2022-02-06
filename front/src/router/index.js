import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Automobili from '../views/Automobili.vue'
import Motori from '../views/Motori.vue'
import UpitAuto from '../views/UpitAuto.vue'
import UpitMotor from '../views/UpitMotor.vue'
import MojUpit from '../views/MojUpit.vue'
import MojUpdate from '../views/MojUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/automobili',
    name: 'Automobili',
    component: Automobili
  },
  {
    path: '/motori',
    name: 'Motori',
    component: Motori
  },
  {
    path: '/upitAuto',
    name: 'UpitAuto',
    component: UpitAuto
  },
  {
    path: '/upitMotor',
    name: 'UpitMotor',
    component: UpitMotor
  },
  {
    path: '/mojupit',
    name: 'MojUpit',
    component: MojUpit
  },
  {
    path: '/mojupdate/:id/:tip',
    name: 'MojUpdate',
    component: MojUpdate
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

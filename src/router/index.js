import Vue from 'vue'
import VueRouter from 'vue-router'
import ErstelleTask from '../views/ErstelleTask.vue';
import BearbeiteTask from '../views/BearbeiteTask.vue';
import TaskListe from '../views/TaskListe.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'TaskListe',
    component: TaskListe,
  }, {
    path: '/create',
    name: 'ErstelleTask',
    component: ErstelleTask,
  }, {
    path: '/edit/:id',
    name: 'BearbeiteTask',
    component: BearbeiteTask,
  }, {
    path: '/',
    redirect: '/Home'
  }, {
    path: '*',
    redirect: '/Home',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

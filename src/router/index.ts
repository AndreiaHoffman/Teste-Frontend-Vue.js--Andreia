import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/settings/privacidade', name: 'Privacidade', component: () => import('../Settings/Privacidade.vue') },
  { path: '/settings/status', name: 'Status', component: () => import('../Settings/Status.vue') },
  { path: '/settings/conta', name: 'Conta', component: () => import('../Settings/Conta.vue') },
  { path: '/settings/ajuda', name: 'Ajuda', component: () => import('../Settings/Ajuda.vue') },

]

export default createRouter({   
  history: createWebHistory(),
  routes
})  
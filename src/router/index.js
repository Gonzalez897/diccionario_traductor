import { createRouter, createWebHistory } from 'vue-router'
import Dictionary from '../views/DictionaryView.vue'
import DefinicionesView from '../views/DefinicionesView.vue'
import Login from '../views/LoginView.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/SyA',
        name: 'dictionary',
        component: Dictionary
    },
    {
        path: '/definiciones',
        name: 'definiciones',
        component: DefinicionesView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
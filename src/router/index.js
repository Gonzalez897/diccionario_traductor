import { createRouter, createWebHistory } from 'vue-router'
import Dictionary from '../views/DictionaryView.vue'
import DefinicionesView from '../views/DefinicionesView.vue'
import ConceptosView from '../views/ConceptosView.vue'
import Welcome from '../views/WelcomeView.vue'
import Login from '../views/LoginView.vue'
import Registro from '../views/RegistrarView.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/registar',
        name: 'registrar',
        component: Registro
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/dictionary',
        name: 'dictionary',
        component: Dictionary
    },
    {
        path: '/definiciones',
        name: 'definiciones',
        component: DefinicionesView
    },
    {
        path: '/conceptos',
        name: 'conceptos',
        component: ConceptosView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import Dictionary from '../views/DictionaryView.vue'
import Traduccion from '../views/TraductorView.vue'
import DefinicionesView from '../views/DefinicionesView.vue'
import ConceptosView from '../views/ConceptosView.vue'
import WelcomeView from '../views/WelcomeView.vue'

const routes = [{
        path: '/',
        name: 'welcome',
        component: WelcomeView
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
    }, {
        path: '/traduccion',
        name: 'traduccion',
        component: Traduccion
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
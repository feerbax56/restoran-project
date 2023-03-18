import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/SignUp'
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
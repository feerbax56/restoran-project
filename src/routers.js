import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/components/Login.vue";


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
    {
        name: 'LogIn',
        component: Login,
        path: '/Login'
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
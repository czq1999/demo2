import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
// import Index from '../components/Index.vue'
import Task1 from '../components/Task1.vue'
import Task2_1 from '../components/Task2_1'
import Task2_2 from '../components/Task2_2'
import Task3 from '../components/Task3.vue'
import Task4 from '../components/Task4.vue'
import Home from '../components/Home'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/Home'
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/Home',
        name:'Home',
        component: Home,
    },
    {
        path:'/Task1',
        name:'Task1',
        component: Task1,

    },
    {
        path:'/Task2_1',
        name:'Task2_1',
        component:Task2_1,

    },
    {
        path:'/Task2_2',
        name:'Task2_2',
        component:Task2_2,

    },
    {
        path:'/Task3',
        name:'Task3',
        component:Task3,
    },
    {
        path:'/Task4',
        name:'Task4',
        component:Task4,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Links from '../views/Links.vue'
import Server from '../views/Server.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/links', name: 'Links', component: Links},
    {path: '/server', name: 'Server', component: Server}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})

export default router
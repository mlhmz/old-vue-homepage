import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Links from './views/Links.vue'
import Server from './views/Server.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram, faTwitter, faLinkedin, faXing, faVuejs } from '@fortawesome/free-brands-svg-icons'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/projects', name: 'Projects', component: Projects},
        {path: '/links', name: 'Links', component: Links},
        {path: '/server', name: 'Server', component: Server}
    ],
    linkActiveClass: 'active'
})

// Regular Icons
library.add(faHeart)

// Branded Icons
library.add(faGithub, faInstagram, faTwitter, faLinkedin, faXing, faVuejs)

createApp(App)
.use(router)
.component('FontAwesomeIcon', FontAwesomeIcon)
.mount('#app')

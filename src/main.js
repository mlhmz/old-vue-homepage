import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram, faTwitter, faLinkedin, faXing, faVuejs } from '@fortawesome/free-brands-svg-icons'

// Regular Icons
library.add(faHeart)

// Branded Icons
library.add(faGithub, faInstagram, faTwitter, faLinkedin, faXing, faVuejs)

createApp(App)
.use(router)
.component('FontAwesomeIcon', FontAwesomeIcon)
.component('Navbar', Navbar)
.component('Footer', Footer)
.mount('#app')

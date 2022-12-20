import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
import router from "./router";
import Navbar from "./components/Navbar.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import ProjectCard from "./components/ProjectCard.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
  faXing,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import pb from "./pocketbase/index";

// Regular Icons
library.add(faHeart);

// Solid Icons
library.add(faXmark);

// Branded Icons
library.add(faGithub, faInstagram, faTwitter, faLinkedin, faXing, faVuejs);

const profilePictureUrl = import.meta.env.VITE_PROFILE_PICTURE_URL;

createApp(App)
  .use(router)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .component("Navbar", Navbar)
  .component("Contact", Contact)
  .component("Footer", Footer)
  .component("ProjectCard", ProjectCard)
  .provide("pb", pb)
  .provide("pfpUrl", profilePictureUrl)
  .mount("#app");

import { createApp } from 'vue'
import App from './App.vue'

import "./styles/main.css"
import "@fontsource/ibm-plex-mono/latin-400.css"

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { SiAstro, SiRos, SiVuedotjs, SiTailwindcss, SiHtml5, SiReact, SiTypescript, SiGithub, SiJavascript, SiLinux, SiCplusplus, SiPython, SiLinkedin, SiDiscord, HiLink, HiSolidCode, HiSolidGlobeAlt, MdMonitorRound } from "oh-vue-icons/icons";

addIcons(SiAstro, SiRos, SiVuedotjs, SiTailwindcss, SiHtml5, SiReact, SiTypescript, SiGithub, SiLinkedin, SiDiscord, SiJavascript, SiLinux, SiCplusplus, SiPython, HiLink, HiSolidCode, HiSolidGlobeAlt, MdMonitorRound);

let hue = 0;
window.setInterval(() => {
    document.getElementById("header").style.color = `hsla(${hue}, 100%, 75%, 1)`;
    (hue+=1)>=360&&(hue=0);
}, 20);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app')

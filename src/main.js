import { createApp } from 'vue'
import App from './App.vue'

import "./styles/main.css"
import "@fontsource/ibm-plex-mono/latin-400.css"
import "boxicons"

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { SiAstro, SiRos } from "oh-vue-icons/icons";

addIcons(SiAstro, SiRos);

let hue = 0;
window.setInterval(() => {
    document.getElementById("header").style.color = `hsla(${hue}, 100%, 75%, 1)`;
    (hue+=1)>=360&&(hue=0);
}, 20);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app')

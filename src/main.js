import { createApp } from 'vue'
import App from './App.vue'

import "./styles/main.css"
import "@fontsource/overpass/latin-400.css"
import "boxicons/css/boxicons.min.css"

let hue = 0;
window.setInterval(() => {
    document.getElementById("header").style.color = `hsla(${hue}, 100%, 75%, 1)`;
    (hue+=1)>=360&&(hue=0);
}, 20);

const app = createApp(App);
app.mount('#app')

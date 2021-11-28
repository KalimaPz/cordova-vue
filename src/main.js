import { createApp} from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCordova from 'vue-cordova'


document.addEventListener("deviceready", () => {
    console.log('device is ready')
    console.log(navigator);
}, false);
createApp(App).use(store).use(router).use(VueCordova).provide("$cordova", window.cordova).mount('#app')

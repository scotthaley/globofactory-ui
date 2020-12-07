import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { auth } from './firebase';
import router from './router'

let app: any;
auth.onAuthStateChanged(() => {
    if (!app) {
        const test = createApp(App).use(router).mount('#app')
    }
})

import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { auth } from './firebase.ts';
import router from './router/index.ts'

let app;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})

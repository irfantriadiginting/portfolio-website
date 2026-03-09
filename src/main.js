import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import './style.css'

// ========== Vue Router Setup ==========
// Router mengatur navigasi antar halaman tanpa reload (Single Page App)
// createWebHistory() → pakai URL biasa (/about, /contact) bukan hash (#/about)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',        // URL utama
            name: 'Home',
            component: HomeView,  // tampilkan komponen HomeView
        },
    ],
    // Scroll ke atas saat pindah halaman
    scrollBehavior() {
        return { top: 0 }
    },
})

// ========== App Init ==========
// createApp() → buat instance Vue baru
// .use(router) → pasang plugin router ke Vue
// .mount('#app') → "tempelkan" app ke elemen <div id="app"> di index.html
const app = createApp(App)
app.use(router)
app.mount('#app')

import { createWebHistory, createRouter } from 'vue-router';
import HomeView from "./pages/Home.vue";
import ProfileView from "./pages/Profile.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        { path: "/", component: HomeView },
        { path: "/profile", component: ProfileView }
    ],
})
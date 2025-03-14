import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/auth/LoginView.vue";
import CatalogView from "@/views/CatalogView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                animation: 'slide-zoom',
            },
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogView,
        },
        {
            path: '/catalog/:id',
            name: 'product',
            component: () => import('../views/ProductView.vue'),
        }
    ],
})

export default router

import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/auth/LoginView.vue";
import CatalogView from "@/views/CatalogView.vue";
import NotFound from "@/views/NotFound.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import {useAuthStore} from "@/stores/auth.js";

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
            path: '/register',
            name: 'register',
            component: RegisterView,
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
        },
        {
            path: '/favourites',
            name: 'favourites',
            component: () => import('../views/FavouriteView.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/ProfileView.vue'),
            meta: {
                protected: true
            }
        }
    ],
})

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore()
    await authStore.initializeAuth;

    if (!authStore.isAuthenticated && to.meta.protected && to.name !== 'login') {
        return next('/login');
    }

    console.log(['login', 'register'].includes(to.name))
    if (authStore.isAuthenticated && ['login', 'register'].includes(to.name)) {
        return next('/');
    }

    next();
})

export default router

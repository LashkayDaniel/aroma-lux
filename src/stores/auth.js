import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {auth} from '@/config/firebase';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';


export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);
    const authInitialized = ref(false);

    const initializeAuth = new Promise((resolve) => {
        onAuthStateChanged(auth, (currentUser) => {
            user.value = currentUser;
            authInitialized.value = true;
            resolve();
        });
    });

    const isAuthenticated = computed(() => !!user.value)

    async function login(email, password) {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    async function register(name, email, password) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, {
            displayName: name
        });
        return user
    }

    async function logout() {
        await auth.signOut();
    }

    return {user, isAuthenticated, initializeAuth, login, register, logout};
});
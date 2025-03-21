import {defineStore} from "pinia";
import {computed, reactive, watch} from "vue";
import {useAuthStore} from "@/stores/auth.js";

export const useBasketStore = defineStore('basket', () => {
    // state
    const basketList = reactive(
        JSON.parse(localStorage.getItem('basket') || '[]'))

    watch(basketList, (newBasket) => {
        localStorage.setItem('basket', JSON.stringify(basketList))
    }, {deep: true})

    // getters
    const getItems = computed(() => {
        return basketList
    })

    // actions
    const isExists = (id) => {
        return basketList.some(itemId => itemId === id)
    }

    const addProduct = (product) => {
        const {isAuthenticated} = useAuthStore()

        if (!isAuthenticated) {
            return alert('Sign in to add items to your cart')
        }

        const {id: productId} = product
        if (isExists(productId)) {
            return alert("Item is in the cart")
        }
        basketList.push(productId)
    }

    const removeProduct = (id) => {
        basketList.splice(basketList.indexOf(id), 1)
    }


    return {getItems, isExists, addProduct, removeProduct}
})
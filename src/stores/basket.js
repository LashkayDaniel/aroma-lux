import {defineStore} from "pinia";
import {computed, reactive, watch} from "vue";

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
        const {id: productId} = product
        if (isExists(productId)) {
            return false
        }
        basketList.push(productId)
        return true
    }

    const removeProduct = (id) => {
        basketList.splice(basketList.indexOf(id), 1)
    }


    return {getItems, isExists, addProduct, removeProduct}
})
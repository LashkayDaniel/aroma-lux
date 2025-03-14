import {computed, reactive, watch} from 'vue'
import {defineStore} from 'pinia'

export const useFavouriteStore = defineStore('favourite', () => {
    // state
    const favourites = reactive(
        JSON.parse(localStorage.getItem('favourites') || '[]'))

    watch(favourites, () => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, {deep: true})


    // getters
    const getAll = computed(() => favourites)

    // actions
    const isFavourite = (productId) => {
        return favourites.some(i => i === productId)
    }
    const append = (productId) => {
        if (isFavourite(productId)) {
            return
        }
        favourites.push(productId)
    }

    const remove = (productId) => {
        if (!isFavourite(productId)) {
            return
        }
        favourites.splice(favourites.indexOf(productId), 1)
    }

    const toggle = (productId) => {
        if (isFavourite(productId)) {
            remove(productId)
        } else {
            append(productId)
        }
    }


    return {getAll, isFavourite, append, remove, toggle}
})

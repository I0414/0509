import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore2 from './statusStore2'

const status = statusStore2()

export default defineStore('productStore', {
  state: () => ({
    products: [],
    category: 'optical' // 默认选中的产品类别为 optical
  }),
  getters: {
    filteredProducts: (state) => {
      return state.products.filter((product) => product.category === state.category)
    },
    sortProducts: ({ products }) => products.sort((a, b) => a.price - b.price)
    // sortProducts: (state) => {
    //   return state.filteredProducts.sort((a, b) => a.price - b.price)
    // }
  },
  actions: {
    getProducts() {
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(url).then((res) => {
        this.products = res.data.products
        status.isLoading = false
      })
    },
    setCategory(category) {
      this.category = category
    }
  }
})

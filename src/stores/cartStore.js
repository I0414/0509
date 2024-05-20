import axios from 'axios'
import { defineStore } from 'pinia'
// import statusStore from './statusStore';
import statusStore2 from './statusStore2'

// const status = statusStore2()

export default defineStore('cartStore', {
  state: () => ({
    cart: {},
    coupon_code: '',
    form: {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: ''
    }
  }),
  actions: {
    addToCart(id, qty = 1) {
      const status = statusStore2()
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      status.loadingItem = id
      axios.post(url, { data: cart }).then((response) => {
        console.log(response)
        this.getCart()
        // this.$httpMessageState(response, '加入購物車');
        // status.pushMessage({ title: '加入購物車' });
        status.addMessage(response, '加入購物車')
        status.loadingItem = ''
      })
    },
    getCart() {
      const status = statusStore2()
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`
      status.isLoading = true
      axios.get(url).then((response) => {
        // console.log(response);
        this.cart = response.data.data
        status.isLoading = false
      })
    },
    updateCart(item) {
      const status = statusStore2()
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      status.isLoading = true
      status.loadingItem = item.id
      axios.put(url, { data: cart }).then((response) => {
        // console.log(response);
        // this.getCart(); 可直接透過底下 第四參數 執行
        // this.$httpMessageState(response, '更新購物車資訊');
        // status.pushMessage({ title: '更新購物車資訊', content: response.data.message });
        // 第三參數 無使用則可用 '', null, undefined
        status.addMessage(response, '更新購物車資訊', '', this.getCart())
        status.loadingItem = ''
        status.isLoading = false
      })
    },
    removeCartItem(id) {
      const status = statusStore2()
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${id}`
      status.isLoading = true
      status.loadingItem = id
      axios.delete(url).then((response) => {
        // console.log(response);
        this.getCart()
        // this.$httpMessageState(response, '移除購物車品項');
        // status.pushMessage({ title: '移除購物車品項', content: response.data.message });
        status.addMessage(response, '移除購物車品項', response.data.message)
        status.loadingItem = ''
        status.isLoading = false
      })
    },
    addCouponCode() {
      const status = statusStore2()
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      status.isLoading = true
      axios.post(url, { data: coupon }).then((response) => {
        // this.$httpMessageState(response, '加入優惠券');
        status.addMessage(response, '加入優惠券', response.data.message)
        this.getCart()
        status.isLoading = false
      })
    },
    createOrder(router) {
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order`
      const order = this.form
      axios.post(url, { data: order }).then((res) => {
        console.log(res)
        const { orderId } = res.data
        // this.$router.push(`/user/checkout/${orderId}`);
        const checkoutRoute = { name: 'checkout', params: { orderId } }
        // 导航到 checkout 路由
        router.push(checkoutRoute)
      })
    }
  }
})

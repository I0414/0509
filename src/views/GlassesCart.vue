<template>
  <section>
      <div class="banner">
        <img v-if="category === 'optical'" class="d-lg-none w-50" src="../assets/images/product-header-sm-1.png" alt="" data-aos="fade-right">
        <img v-if="category === 'optical'" class="d-lg-none w-50" src="../assets/images/product-header-sm-2.png" alt="" data-aos="fade-left">
        <img v-if="category === 'optical'"  class="d-none d-lg-inline-block w-50" src="../assets/images/product-header-1.png" alt="" data-aos="fade-right">
        <img v-if="category === 'optical'" class="d-none d-lg-inline-block w-50" src="../assets/images/product-header-2.png" alt="" data-aos="fade-left">
        <img v-if="category === 'sun'" class="d-lg-none w-50" src="../assets/images/product-header-sm-3.png" alt="" data-aos="fade-right">
        <img v-if="category === 'sun'" class="d-lg-none w-50" src="../assets/images/product-header-sm-4.png" alt="" data-aos="fade-left">
        <img v-if="category === 'sun'"  class="d-none d-lg-inline-block w-50" src="../assets/images/product-header-3.png" alt="" data-aos="fade-right">
        <img v-if="category === 'sun'" class="d-none d-lg-inline-block w-50" src="../assets/images/product-header-4.png" alt="" data-aos="fade-left">
        <img v-if="category === 'func'" class="d-lg-none w-50" src="../assets/images/product-header-sm-2.png" alt="" data-aos="fade-right">
        <img v-if="category === 'func'" class="d-lg-none w-50" src="../assets/images/product-header-sm-3.png" alt="" data-aos="fade-left">
        <img v-if="category === 'func'"  class="d-none d-lg-inline-block w-50" src="../assets/images/product-header-2.png" alt="" data-aos="fade-right">
        <img v-if="category === 'func'" class="d-none d-lg-inline-block w-50" src="../assets/images/product-header-3.png" alt="" data-aos="fade-left">
      </div>
    </section>
  <section>
      <div class="container py-7 py-md-11">
        <h2 v-if="category === 'optical'" class="text-center"><small>Celluloid Combi</small></h2>
        <h2 v-if="category === 'sun'" class="text-center"><small>2024 NEW COLLECTION</small></h2>
        <h2 v-if="category === 'func'" class="text-center"><small>2024 NEW VACATION</small></h2>
        <h4 class="text-center fw-normal mb-4 mb-md-6">賽璐珞鈦金屬混合鏡框</h4>
        <h4 v-if="category === 'func'" class="text-center fw-normal mb-4 mb-md-6">敬啟期待...</h4>
        <div class="row">
          <div class="col-md-6 col-lg-3" v-for="item in filteredProducts" :key="item.id">
            <div class="card border-0 rounded-0 mb-4 mb-md-7 mb-lg-11">
              <img :src="item.imageUrl" alt="">
              <div class="d-flex justify-content-between ">
                <h4 class="card-title fw-normal m-0">{{ item.title }}</h4>
                <del class="card-price fw-normal m-0 h4">NTD{{ item.origin_price }}</del>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-1">
                <div>
                  <a href="" class="btn dark rounded"></a>
                  <a href="" class="btn light rounded"></a>
                </div>
                <h4 class="fw-normal m-0 text-primary" v-if="item.price">NTD{{ item.price }}</h4>
              </div>
              <div class="btn-group btn-group-sm mt-auto">
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="loadingItem === item.id"
                    @click="addToCart(item.id)"
                  >
                    <div
                      v-if="loadingItem === item.id"
                      class="spinner-grow text-danger spinner-grow-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productStore from '../stores/productStore';
import statusStore2 from '../stores/statusStore2';
import cartStore from '../stores/cartStore';

export default {
  computed: {
    ...mapState(productStore, ['sortProducts', 'category', 'filteredProducts']),
    // ...mapState(cartStore, ['cart', 'form']),
    ...mapState(statusStore2, ['isLoading', 'loadingItem']),
    // filteredProducts() {
    //   return this.sortProducts.filter(item => item.category === this.category);
    // }
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart', 'getCart', 'updateCart', 'removeCartItem', 'addCouponCode', 'createOrder']),

  },
  created() {
    this.getProducts();
    this.getCart();
  }
}
</script>
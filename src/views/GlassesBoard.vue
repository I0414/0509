<template>
      <header>
      <div class="container">
        <div class="row g-0 text-center text-black">
          <!-- <div class="col"><button class="nav-link text-black fs-6 fs-md-4 fs-lg-3 py-3 py-lg-4 border w-100" @click="showProducts('optical')">
    <small>Optical</small>
  </button></div>           -->
          <div class="col"><a class="nav-link text-black fs-6 fs-md-4 fs-lg-3 py-3 py-lg-4 border h-100" @click="showProducts('optical')" :class="{ 'active': currentCategory === 'optical' }"><small>Optical</small></a></div>
          <div class="col"><a class="nav-link text-black fs-6 fs-md-4 fs-lg-3 py-3 py-lg-4 border h-100" @click="showProducts('sun')" :class="{ 'active': currentCategory === 'sun' }"><small>SUNGLASSES</small></a></div>
          <div class="col"><a class="nav-link text-black fs-6 fs-md-4 fs-lg-3 py-3 py-lg-4 border h-100" @click="showProducts('func')" :class="{ 'active': currentCategory === 'func' }"><small>FUNCTIONAL</small></a></div>
        </div>
      </div>
    </header>
    <ToastMessages></ToastMessages>
    <router-view/>
</template>

<script>
import { mapActions } from 'pinia';
import productStore from '../stores/productStore';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  data() {
    return {
      currentCategory: 'optical' // 默认选中的产品类别为 optical
    };
  },
  components: {
    ToastMessages,
  },
  methods: {
    ...mapActions(productStore, ['setCategory']),
    showProducts(category) {
      if (this.currentCategory !== category) {
      this.setCategory(category);
      this.currentCategory = category; // 更新当前选中的类别
    }
  }
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/pages/_products.scss';
</style>
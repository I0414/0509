<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/user/cart">結帳平台</router-link>
    </div>
  </nav>
  <div class="position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
  },
};
</script>

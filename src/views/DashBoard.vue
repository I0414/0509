<template>
  <div>
    <NavBar></NavBar>
    <div class="container-fluid">
      <ToastMessage></ToastMessage>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ToastMessage from '@/components/ToastMessages.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    NavBar,
    ToastMessage,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${import.meta.env.VITE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>

<template>
  <NavbarView></NavbarView>
  <router-view></router-view>
  <FooterView></FooterView>
</template>
<script>
  import NavbarView from "./components/NavbarView.vue";
  import FooterView from "./components/FooterView.vue";
  export default {
    components: {
      NavbarView,
      FooterView,
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/all.scss';
  // @import './assets/scss/pages/_index.scss';
</style>

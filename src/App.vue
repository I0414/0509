<template>
  <NavbarView></NavbarView>
  <router-view></router-view>
</template>
<script>
  import NavbarView from "./components/NavbarView.vue";

  export default {
    components: {
      NavbarView,
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/all.scss';
  // @import './assets/scss/pages/_index.scss';
</style>

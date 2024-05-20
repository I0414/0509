<template>
  <nav class="navbar navbar-expand-md bg-primary p-0" data-bs-theme="dark">
    <div class="container-fluid container-md px-0 px-md-3">
      <router-link to="/" class="navbar-brand p-0 ms-n3" aria-current="page" href="./index.html">
        <img src="../assets/images/favIcon.jpg" alt="" width="80px" height="80px">
      </router-link>

      <div class=" navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav flex-column flex-md-row ms-auto fs-5">
          <div class="row g-0 text-center">
            <router-link to="/glasses/cart" class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4"
              >系列鏡框</router-link>
            <router-link to="/location/stores" class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4"
              >門市據點</router-link>
            <router-link to="/adv/blogs" class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4"
              >部落格</router-link>
            <!-- <router-link to="/qa" class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4"
              >常見問題</router-link> -->
            <router-link to="/user/cart" class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4 me-md-n6"
              >購物車<span class="badge rounded-pill bg-white text-danger ms-1">{{ cart.carts ? cart.carts.length : 0 }}</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'pinia';
  import cartStore from '@/stores/cartStore';

  export default {
  computed: {
    ...mapState(cartStore, ['cart']),
  },
}
</script>
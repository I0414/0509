<template>
  <nav class="navbar navbar-expand-md bg-primary p-0" data-bs-theme="dark">
    <div class="container-fluid container-md px-0 px-md-3">
      <router-link to="/" class="navbar-brand p-0 ms-n3" aria-current="page" href="./index.html">
        <img src="../assets/images/favIcon.jpg" alt="" width="80px" height="80px">
      </router-link>

      <div class=" navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav flex-column flex-md-row ms-auto fs-5">
          <div class="row g-0 text-center">
            <router-link to="/user/cart" class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4"
              >系列鏡框</router-link>
            <router-link to="" class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4"
              href="./location.html">門市據點</router-link>
            <router-link to="/user/blogs" class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4"
              >部落格</router-link>
            <router-link to="/user/qa"
              class="nav-link col-6 border border-white border-md-0 col-md-auto px-md-6 py-md-4 me-md-n6"
              >常見問題</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
  
  }
</script>
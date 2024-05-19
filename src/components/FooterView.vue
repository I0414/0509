<template>
  <footer class="bg-primary" data-bs-theme="dark">
    <div class="container text-white">
      <div class="py-4 py-sm-5">
        <div class="my-n1">
          <div class="navbar d-flex justify-content-between align-items-center" data-bs-theme="dark">
            <div class="navbar-nav flex-row d-none d-md-flex">
              <router-link to="/" class="nav-link px-4 py-0 py-md-5 py-lg-6 ms-n4 active" aria-current="page" href="./index.html">首頁</router-link>
              <router-link to="/glasses/cart" class="nav-link px-4 py-0 py-md-5 py-lg-6" href="./productsOpt.html">系列鏡框</router-link>
              <router-link to="/location/stores" class="nav-link px-4 py-0 py-md-5 py-lg-6" href="./location.html">門市據點</router-link>
              <router-link to="/adv/blogs" class="nav-link px-4 py-0 py-md-5 py-lg-6" href="./blogs.html">部落格</router-link>
              <router-link to="/qa" class="nav-link px-4 py-0 py-md-5 py-lg-6" href="./qa.html">常見問題</router-link>
            </div>
            <ul class="navbar-nav flex-row ms-auto">
              <li class="nav-item">
                <a href="" class="nav-link px-3"><img src="../assets/images/ic-social-fb.png" alt=""
                    width="48px" /></a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link px-3"><img src="../assets/images/ic_social_ig.png" alt=""
                    width="48px" /></a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link px-3 me-n3"><img src="../assets/images/ic_social_line.png" alt=""
                    width="48px" /></a>
              </li>
            </ul>
          </div>
          <p class="mt-n8 mb-0 my-md-0 py-1 fs-md-3 d-flex align-items-center">
            <span class="material-symbols-outlined d-md-none me-2"> call </span>
            <span class="material-symbols-outlined d-none d-md-inline-block me-3" style="font-size: 48px">
              call
            </span>
            <a href="tel:+0800-000-00">0800-000-00</a>
          </p>
          <p class="mb-0 py-1 fs-md-3 d-flex align-items-center">
            <span class="material-symbols-outlined d-md-none me-2 align-self-center">
              mail </span><span class="material-symbols-outlined d-none d-md-inline-block me-3" style="font-size: 48px">
              mail </span><a href="mailto:glasses@business.co">glasses@business.co</a>
          </p>
        </div>
      </div>
      <hr class="m-0" />
      <div class="d-md-flex justify-content-between align-items-center fs-md-7 py-3 py-md-0">
        <h6 class="fw-normal m-0">
          Copyright @ 2020 Glasses.All rights reserved.
        </h6>
        <div class="navbar-nav flex-md-row">
          <a class="nav-link px-md-4 py-md-6" href="#">隱私權政策</a>
          <a class="nav-link px-md-4 py-md-6 mt-n2 mt-md-0 me-n4" href="#">服務條款</a>
        </div>
      </div>
    </div>
  </footer>

</template>
<template>
  <section>
    <div class="container py-7 py-md-11">
      <h1 class="fs-4 fs-md-2 border-start border-primary border-8 ps-3 ms-n1 mb-4 mb-md-6" data-aos="fade-left">
        部落格
      </h1>
      <router-link to="" class="row flex-column flex-md-row mb-4 mb-lg-13" v-for="(product, index) in filteredProducts"
        :key="index" @click="getProduct(product.id)" :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
        <div class="col-md-6">
          <img :src="product.image" alt="" />
        </div>
        <div class="col-md-6 d-flex flex-column">
          <h3 class="fw-normal text-secondary mb-0 fs-4 fs-lg-8">
            {{ product.title }}
          </h3>
          <div class="d-flex justify-content-between align-items-center mb-md-1 mb-lg-3">
            <h5 class="fw-medium mb-0 fs-6 fs-lg-5">
              {{ product.sub_title }}
            </h5>
            <span>{{ product.date }}</span>
          </div>
          <p class="d-none d-md-block fs-6 mb-0">
            <span class="text-black overflow-y-md-hidden" style="
                  -webkit-line-clamp: 6;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                ">
              {{ product.content }}
            </span>
          </p>
          <a class="d-none d-xl-block fs-3 fw-black text-secondary mt-auto ms-auto mb-0">
            More
          </a>
        </div>
      </router-link>
    </div>
  </section>

  <PaginationView :pages="pagination"></PaginationView>
</template>

<script>
import PaginationView from '@/components/PaginationView.vue'

export default {
  data() {
    return {
      pagination: {
        category: null,
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      },
    };
  },
  components: {
    PaginationView,
  },
  props: ['filteredProducts'],
  methods: {
    getProduct(id) {
      this.$router.push(`/adv/blogs/${id}`);
    },
  }
}
</script>
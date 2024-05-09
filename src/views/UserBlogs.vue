<template>
      <nav class="bg-success  mb-3">
      <div class="container">
        <div class="navbar mx-n4" data-bs-theme="dark">
          <ul class="navbar-nav w-100 w-md-auto d-flex flex-row justify-content-between ">
            <li class="nav-item">
              <a
                class="nav-link px-4 py-3"
                aria-current="page"
                href="#"
                >最新消息</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link px-4 py-3" href="#">特別企劃</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-4 py-3" href="#">新品上市</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-4 py-3" href="#">鏡框小知識</a>
            </li>
          </ul>
          <a href="" class="d-none d-md-block nav-link px-4">
            <span class="material-symbols-outlined text-white align-middle" style="font-size: 40px;">
              search
              </span>
          </a>
            
        </div>
      </div>
    </nav>
    <section>
      <div class="container py-7 py-md-11">
        <h1
          class="fs-4 fs-md-2 border-start border-primary border-8 ps-3 ms-n1 mb-4 mb-md-6"
        >
          部落格
        </h1>
        <a class="row flex-column flex-md-row mb-4 mb-lg-13" v-for="(product, index) in products" :key="index" @click="getProduct(product.id)">
          <div class="col-md-6">
              <img :src="product.image" alt="" />
          </div>
          <div class="col-md-6 d-flex flex-column">
            <h3 class="fw-normal text-success mb-0 fs-4 fs-lg-8">
              {{ product.title }}
            </h3>
            <div
              class="d-flex justify-content-between align-items-center mb-md-1 mb-lg-3"
            >
              <h5 class="fw-medium mb-0 fs-6 fs-lg-5">
                {{ product.sub_title }}
              </h5>
              <span>{{ product.date }}</span>
            </div>
            <p class="d-none d-md-block fs-6 mb-0">
              <span
                class="text-black overflow-y-md-hidden"
                style="
                  -webkit-line-clamp: 6;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                "
              >
                {{ product.content }}
            </span>
            </p>
            <a href="./blog1.html"
              class="d-none d-xl-block fs-3 fw-black text-success mt-auto ms-auto mb-0"
            >
              More
            </a>
          </div>
        </a>
      </div>
    </section>

    <PaginationView :pages="pagination"></PaginationView>
</template>

<script>
import PaginationView from '@/components/PaginationView.vue'

export default {
  data() {
    return {
      products: [
        {
          title: '情人特別企劃',
          sub_title: '2020 Valentine’s Special',
          date: '2020/02/14',
          content: `一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯`,
          image: '../assets/images/blog-1.png',
          id: 1,
        },
        {
          title: '街頭潮人訪問',
          sub_title: 'Street Interview',
          date: '2020/02/02',
          content: `炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭
                T
                恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的
                3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯`,
          image: '../assets/images/blog-2.png',
          id: 2,
        },
        {
          title: '春季新品上市',
          sub_title: 'New Selection',
          date: '2020/02/14',
          content: `2020
                年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯`,
          image: '../assets/images/blog-3.png',
          id: 3,
        },
        {
          title: '設計師獨享鏡框優惠',
          sub_title: 'Sales for Designer',
          date: '2020/01/18',
          content: `2020
                年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯`,
          image: '../assets/images/blog-4.png',
          id: 4,
        },
        {
          title: '抵抗夏日大作戰',
          sub_title: 'Summer Special',
          date: '2019/08/07',
          content: `2020
                年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯`,
          image: '../assets/images/blog-5.png',
          id:5,
        },
      ],
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
  methods:{
    getProduct(id) {
      this.$router.push(`/user/blog/${id}`);
    },
    // getProducts(page = 1) {
      // const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products/?page=${page}`;
      // this.isLoading = true;
      // this.$http.get(api).then((res) => {
      //   this.isLoading = false;
      //   if (res.data.success) {
      //     console.log(res.data);
      //     this.products = res.data.products;
          // this.pagination = res.data.pagination;
        }
  //     });
  //   },
  // },
  // created() {
  //   this.getProducts();
  // },
}
</script>
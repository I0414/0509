<template>
  <section class="bg-secondary mb-3 mb-md-2 mb-md-4">
    <div class="container">
      <nav class="navbar" data-bs-theme="dark">
        <ul class="navbar-nav w-100 w-md-auto d-flex flex-row justify-content-between mx-n2 mx-md-0">
          <li class="nav-item" :class="{ 'active': selectedCategory === null }">
            <a class="nav-link px-2 px-md-4 py-3" aria-current="page" @click="filterProducts(null)">最新消息</a>
          </li>
          <li class="nav-item" :class="{ 'active': selectedCategory === '特別企劃' }">
            <a class="nav-link px-2 px-md-4 py-3" @click="filterProducts('特別企劃')">特別企劃</a>
          </li>
          <li class="nav-item" :class="{ 'active': selectedCategory === '新品上市' }">
            <a class="nav-link px-2 px-md-4 py-3" @click="filterProducts('新品上市')">新品上市</a>
          </li>
          <li class="nav-item" :class="{ 'active': selectedCategory === '鏡框小知識' }">
            <a class="nav-link px-2 px-md-4 py-3 me-n2 me-md-0" @click="filterProducts('鏡框小知識')">鏡框小知識</a>
          </li>
        </ul>
        <div href="" class="d-none d-md-block">
          <form class="d-flex w-75 mx-auto">
            <button class="btn position-absolute" type="submit" id="goSearchBtn"><i class="bi bi-search"></i></button>
            <input class="form-control " id="goSearchText" type="search" placeholder="Search" aria-label="Search"
              style="padding-left:3rem" @keyup.enter="searchProducts($event.target.value)">
          </form>
        </div>
      </nav>
    </div>
  </section>
  <router-view :filteredProducts="filteredProducts"></router-view>
</template>

<script>
import blogImg1 from'@/assets/images/blog-1.png';
import blogImg2 from'@/assets/images/blog-2.png';
import blogImg3 from'@/assets/images/blog-3.png';
import blogImg4 from'@/assets/images/blog-4.png';
import blogImg5 from'@/assets/images/blog-5.png';

export default {
  data() {
    return {
      selectedCategory: null,
      products: [
        {
          category: '特別企劃',
          title: '情人特別企劃',
          sub_title: '2020 Valentine’s Special',
          date: '2020/02/14',
          content: `一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯`,
          image: blogImg1,
          id: 1,
        },
        {
          category: '鏡框小知識',
          title: '街頭潮人訪問',
          sub_title: 'Street Interview',
          date: '2020/02/02',
          content: `炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭
                T
                恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的
                3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯`,
          image: blogImg2,
          id: 2,
        },
        {
          category: '新品上市',
          title: '春季新品上市',
          sub_title: 'New Selection',
          date: '2020/02/14',
          content: `2020
                年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯`,
          image: blogImg3,
          id: 3,
        },
        {
          category: '特別企劃',
          title: '設計師獨享鏡框優惠',
          sub_title: 'Sales for Designer',
          date: '2020/01/18',
          content: `2020
                年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯`,
          image: blogImg4,
          id: 4,
        },
        {
          category: '鏡框小知識',
          title: '抵抗夏日大作戰',
          sub_title: 'Summer Special',
          date: '2019/08/07',
          content: `2020
                年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯`,
          image: blogImg5,
          id: 5,
        },
      ],
      filteredProducts: [],
    }
  },
  methods: {
    filterProducts(category) {
      this.selectedCategory = category;
      if (category) {
        this.filteredProducts = this.products.filter(product => product.category === category);
      } else {
        this.filteredProducts = this.products;
      }
    },
    searchProducts(keyword) {
      this.filteredProducts = this.products.filter(product => {
        return product.title.includes(keyword) || product.content.includes(keyword);
      });
    }
  },
  created() {
    this.filteredProducts = this.products;
  }
}
</script>

<style>
.nav-item.active a {
  font-weight: bold; 
}
</style>
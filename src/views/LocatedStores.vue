<template>
  <form class="row mb-4 mb-md-7">
      <div class="col-auto">
        <div class="fs-4" data-aos="fade-left" data-aos-duration="1200">選擇地區</div>
      </div>
      <div class="col" data-aos="fade-left" data-aos-duration="1200">
        <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
        <select class="form-select" id="inlineFormSelectPref" v-model="selectedArea">
          <!-- <option value="-1">請選擇區域</option> -->
          <option v-for="(area, index) in areas" :value="index" :key="index">{{ area }}</option>
        </select>
      </div>
      <div class="col-md-5 col-lg-8"></div>
    </form>
    <div class="row gy-4 gy-lg-9">
      <div class="col-md-6 col-lg-4" v-for="(store, index) in filteredStores" :key="index" :data-aos="'zoom-in'" 
      :data-aos-delay="index * 100">
        <div class="card h-100">
          <img :src="store.image" alt="" class="card-img-top" />
          <div class="card-header fs-4">{{ store.name }}</div>
          <div class="card-body fs-5">
            <div class="my-n1">
              <p class="mb-0 py-1 fs-md-5 d-flex align-items-center text-black">
                <span class="material-symbols-outlined d-none d-md-inline-block me-2" style="font-size: 24px">
                  call </span><a href="tel:+(02000)-1234" class="text-black w-100">電話：{{ store.phone }}</a>
              </p>
              <p class="mb-0 py-1 fs-md-5 d-flex align-items-center text-black">
                <span class="material-symbols-outlined d-none d-md-inline-block me-2" style="font-size: 24px">
                  schedule </span><a href="" class="text-black w-100">營業時間：{{ store.time}}</a>
              </p>
              <p class="mb-0 py-1 fs-md-5 d-flex align-items-top text-black">
                <span class="material-symbols-outlined d-none d-md-inline-block mt-1 me-2" style="font-size: 24px">
                  location_on </span><a href="" class="text-black w-100">地址：{{ store.address}}</a>
              </p>
            </div>
          </div>
          <div class="card-footer bg-black text-white text-center p-0"><a class="nav-link py-3" @click="getProduct(store.id)">詳細資訊</a></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedArea: 0,
      }
    },
    props: ['stores', 'areas'],
    computed: {
      filteredStores() {
      if (this.areas[this.selectedArea] === '請選擇區域') {
        return this.stores;
      } else {
        const selectedAreaName = this.areas[this.selectedArea];
        return this.stores.filter(store => store.area === selectedAreaName);
      }
    }
  },
  
    methods: {
    getProduct(id) {
      this.$router.push(`/location/stores/${id}`);
    },
  }
}
</script>
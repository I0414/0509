<template>
  <div class="container py-7 py-md-11">
    <form class="row mb-4 mb-md-7">
      <div class="col-auto">
        <div class="fs-4">選擇地區</div>
      </div>
      <div class="col">
        <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
        <select class="form-select" id="inlineFormSelectPref" v-model="id">
          <option v-for="store in filteredStores" :value="store.id" :key="store.id">{{ store.name }}</option>
        </select>
      </div>
      <div class="col-md-5 col-lg-8"></div>
    </form>

    <div class="row gy-4 gy-lg-9">
      <div class="col-lg-5" v-if="selectedStore" data-aos="fade-left">
        <div class="card h-100 border-0">
          <div class="row flex-column flex-md-row flex-lg-column">
            <div class="col">
              <img :src="selectedStore.image" alt="" class="card-img-top h-100" />
            </div>
            <div class="col">
              <p class="card-header fs-4 border">{{ selectedStore.name }}</p>
              <div class="card-body fs-5 border">
                <div class="my-n1">
                  <p class="mb-0 py-1 fs-md-5 d-flex align-items-center text-black">
                    <span class="material-symbols-outlined d-none d-md-inline-block me-2" style="font-size: 24px">call</span>
                    <a :href="'tel:' + selectedStore.phone" class="text-black w-100">電話：{{ selectedStore.phone }}</a>
                  </p>
                  <p class="mb-0 py-1 fs-md-5 d-flex align-items-center text-black">
                    <span class="material-symbols-outlined d-none d-md-inline-block me-2" style="font-size: 24px">schedule</span>
                    <a href="" class="text-black w-100">營業時間：{{ selectedStore.time }}</a>
                  </p>
                  <p class="mb-0 py-1 fs-md-5 d-flex align-items-top text-black">
                    <span class="material-symbols-outlined d-none d-md-inline-block mt-1 me-2" style="font-size: 24px">location_on</span>
                    <a :href="selectedStore.web" class="text-black w-100">地址：{{ selectedStore.address }}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg" data-aos="fade-right">
        <iframe :src="selectedStore.map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" class="w-100 h-sm-208 h-md-414 h-lg-100"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      selectedStore: null,
      filteredStores: [],
    }
  },
  props: ['stores'],
  methods: {
    filterStores() {
      const selectedStore = this.stores.find(store => store.id === parseInt(this.id));
      if (selectedStore) {
        const area = selectedStore.area;
        this.selectedStore = selectedStore;
        this.filteredStores = this.stores.filter(store => store.area === area);
      }
    }
  },
  created() {
    this.id = this.$route.params.storeId;
    this.filterStores();
  },
  watch: {
    id() {
      this.filterStores();
    }
  }
}
</script>

<template>
  <LoadingView :active="isLoading"></LoadingView>
    <div class="text-end mt-3">
    <button class="btn btn-primary" type="button"
    @click="openModal(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-secondary" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
              @click="openDelProductModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationView :pages="pagination" @emit-pages="getProducts"></PaginationView>
  <ProductModal ref="productModal" :product="tempProduct"
    @update-product="updateProduct"></ProductModal>
  <DelModal ref="delModal" :item="tempProduct"
    @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';
import PaginationView from '@/components/PaginationView.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    PaginationView,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // new
      let api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product`;
      let httpMethod = 'post';

      // edit
      if (!this.isNew) {
        api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        console.log(response);
        productComponent.hideModal();
        this.$httpMessageState(response, 'update success', this.getProducts);
      });
    },
    // 開啟刪除 Modal
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url).then((response) => {
        console.log(response.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

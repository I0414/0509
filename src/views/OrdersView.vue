<template>
  <LoadingView :active="isLoading"></LoadingView>
  <div class="row py-3">
    <div class="col-lg-6">
      <div id="quantityChart"></div>
    </div>
    <div class="col-lg-6">
      <div id="totalChart"></div>
    </div>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-success': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }} 售價： {{ $filters.currency(product.product.price) }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ $filters.currency(item.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`" v-model="item.is_paid"
                  @change="updatePaid(item)">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelOrderModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid"></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import OrderModal from '@/components/OrderModal.vue';
import Pagination from '@/components/PaginationView.vue';
import c3 from 'c3';
import 'c3/c3.css';

export default {
  data() {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1,
    };
  },
  components: {
    Pagination,
    DelModal,
    OrderModal,
  },
  methods: {
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
        this.isLoading = false;
        console.log(response);
        this.renderCharts(); // 渲染图表
      });
    },
    openModal(isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    updatePaid(item) {
      this.isLoading = true;
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid }).then((response) => {
        this.isLoading = false;
        this.getOrders(this.currentPage);
        this.$httpMessageState(response, '更新付款狀態');
      });
    },
    delOrder() {
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log(response);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getOrders(this.currentPage);
      });
    },
    renderCharts() {
      const productCounts = {}; // 用于统计每种产品的销售数量
      const productTotals = {}; // 用于统计每种产品的总销售额
      const ordersArray = Object.values(this.orders);
      // 遍历订单数据，统计每种产品的销售数量和总销售额
      ordersArray.forEach((order) => {
        if (order && typeof order.products === 'object') {
          Object.values(order.products).forEach((product) => {
            const title = product.product.title;
            if (!productCounts[title]) {
              productCounts[title] = 0;
              productTotals[title] = 0;
            }
            productCounts[title] += product.qty;
            productTotals[title] += product.product.price * product.qty;
          });
        } else {
          console.log('Order has no products or products is not an object:', order); // 调试信息
        }
      });

      // 生成数量图表
      c3.generate({
        bindto: '#quantityChart',
        data: {
          columns: Object.entries(productCounts),
          type: 'donut',
        },
        donut: {
          title: '銷售數量'
        }
      });
      // 生成总金额图表
      c3.generate({
        bindto: '#totalChart',
        data: {
          columns: Object.entries(productTotals),
          type: 'donut',
        },
        donut: {
          title: '銷售金額比'
        }
      });
    }
  },
  created() {
    this.getOrders();
    console.log(import.meta.env.VITE_APP_API);
  },
};
</script>

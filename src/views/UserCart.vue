<template>
  <LoadingView :active="isLoading"></LoadingView>
  <div class="container">
    <div class="row mt-4">
      <!-- <div class="col-md-7">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in sortProducts" :key="item.id">
              <td style="width: 200px">
                <div
                  style="height: 100px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>
                <a href="#" class="text-dark">{{ item.title }}</a>
              </td>
              <td>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="getProduct(item.id)"
                  >
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="loadingItem === item.id"
                    @click="addToCart(item.id)"
                  >
                    <div
                      v-if="loadingItem === item.id"
                      class="spinner-grow text-danger spinner-grow-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <!-- 購物車列表 -->
      <div class="col-md-6">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>圖片</th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th class="text-end">單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      :disabled="loadingItem === item.id"
                      @click="removeCartItem(item.id)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                  <td style="width: 200px">
                    <img :src="item.product.imageUrl" alt="">
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <label for="quantityInput"></label>
                        <input
                          type="number"
                          id="quantityInput"
                          class="form-control col-auto"
                          min="1"
                          :disabled="item.id === loadingItem"
                          @change="updateCart(item)"
                          v-model.number="item.qty"
                        />
                        <div class="input-group-text">/ {{ item.product.unit }}</div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small v-if="cart.final_total !== cart.total" class="text-success"
                      >折扣價：</small
                    >
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm d-flex align-items-end justify-content-end">
            <label for="couponInput">
              <input
                type="text"
                id="couponInput"
                class="form-control"
                v-model="coupon_code"
                placeholder="請輸入優惠碼"
              />
            </label>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row justify-content-end mt-2">
          <FormView class="col-md-10" v-slot="{ errors }" @submit="onSubmitOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <FieldView
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></FieldView>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <FieldView
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></FieldView>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <FieldView
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required|isPhone"
            v-model="form.user.tel"
          ></FieldView>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <FieldView
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></FieldView>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </FormView>
        </div>
        
      </div>
    </div>
    <div class="my-5 row ">
      
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productStore from '../stores/productStore';
import statusStore2 from '../stores/statusStore2';
import cartStore from '../stores/cartStore';
import { defineRule } from 'vee-validate';

defineRule('isPhone', (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) ? true : '需要正確的電話號碼';
});

export default {
  data() {
    return {
      product: {},
      coupon_code: '',
    };
  },
  computed: {
    ...mapState(productStore, ['sortProducts']),
    ...mapState(cartStore, ['cart', 'form']),
    ...mapState(statusStore2, ['isLoading', 'loadingItem']),
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart', 'getCart', 'updateCart', 'removeCartItem', 'addCouponCode', 'createOrder']),

    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    
    addCouponCode() {
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券');
        this.getCart();
        this.isLoading = false;
      });
    },
    onSubmitOrder() {
      this.createOrder(this.$router)
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

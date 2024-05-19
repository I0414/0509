<template>
  <div class="container py-7 py-md-11">
    <FormView class="row justify-content-center needs-validation" novalidate v-slot="{ errors }"
      @submit="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <FieldView
            type="email"
            name="email"
            id="inputEmail"
            autocomplete="current-username"
            class="form-control"
            :class="{ 'is-invalid': errors && errors['email'],
            'is-valid': errors && !errors['email'] && user.username}"
            rules="email|required"
            placeholder="Email address"
            required
            v-model="user.username"
          ></FieldView>
          <div class="valid-feedback">Looks good!</div>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <FieldView
            type="password"
            name="Password"
            id="inputPassword"
            autocomplete="current-password"
            class="form-control"
            :class="{ 'is-invalid': errors['Password'],
            'is-valid': errors && !errors['Password'] && user.password}"
            rules="required"
            placeholder="Password"
            required
            v-model="user.password"
          />
          <div class="valid-feedback">Looks good!</div>
          <ErrorMessage name="Password" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </FormView>
  </div>
</template>

<script>
// import axios from 'axios';


export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      // isEmailValid: false,
    };
  },
  // mounted() {
  //   // 在页面加载时检查电子邮件地址的有效性
  //   this.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.username);
  // },
  // watch: {
  //   'user.username': {
  //     handler(newValue) {
  //       // 当用户输入发生变化时，更新电子邮件地址的有效性
  //       this.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue);
  //     },
  //     deep: true,
  //   },
  // },
  methods: {
    signIn() {
      const api = `${import.meta.env.VITE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/dashboard/products');
          }
        });
    },
  },
};
</script>

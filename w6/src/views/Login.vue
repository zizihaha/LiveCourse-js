<template>
  <div>
    <div class="container">
      <form class="form-signin" @submit.prevent="signin">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            id="inputEmail"
            v-model="user.email"
            type="email"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            id="inputPassword"
            v-model="user.password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          登入
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  created() {
    // 取得 token 的 cookies
    this.user.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    // 若無法取得 token 則返回 Login 頁面
    if (!this.user.token == ' ') {
      alert('已登入，將轉往後台首頁');
      this.$router.push('/admin/products');
    }
  },
  methods: {
    signin() {
      const api = `https://course-ec-api.hexschool.io/api/auth/login`;
      this.$http
        .post(api, this.user)
        .then((response) => {
          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `token=${token};expires=${new Date(
            expired * 1000
          )}; path=/`;
          this.$router.push('/admin/products');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
  text-align: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>

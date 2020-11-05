<template>
  <div>
    <loading loader="dots" :active.sync="isLoading"> </loading>

    <section class="d-flex">
      <nav-sidebar />

      <main class="main container-fluid">
        <!-- 等驗證完才跑內容 -->
        <router-view v-if="checkSuccess" />
        <!-- 內層有用到token嗎? -->
        <!-- <router-view :token="token" v-if="checkSuccess" /> -->
      </main>
    </section>
  </div>
</template>

<script>
import NavSidebar from '@/components/backend/NavSidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    NavSidebar
  },
  data() {
    return {
      token: '',
      checkSuccess: false,
      isLoading: false
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      // 取出 login頁面 時存在 cookies 的 token
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      const api = `https://course-ec-api.hexschool.io/api/auth/check`;

      // 這邊 api 規定 api_token 要物件
      this.isLoading = true;
      this.$http
        .post(api, { api_token: this.token })
        .then(() => {
          // console.log(res.data.message, '驗證成功，請先登入');
          this.checkSuccess = true;
          // 將 Token 加入到 Headers 內驗證，帶上取得的 token  (common是 預設值)
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;

          console.log(error.response.data.errors.api_token, '驗證失敗');
          this.$router.push('/login'); // 若無法取得 token 則返回 Login 頁面
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  margin-left: 296px;
}

.userAvatar {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
}
</style>

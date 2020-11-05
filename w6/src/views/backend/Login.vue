<template>
  <div class="loginPage">
    <div class="login">
      <form class="form form-signin" @submit.prevent="signin">
        <h2 class="mb-4 text-center">管理者登入</h2>
        <div class="form-group">
          <label for="user_id">帳號</label>
          <input id="user_id" v-model="user.email" type="email" required />
        </div>
        <div class="form-group">
          <label for="user_password">密碼</label>
          <input
            type="password"
            id="user_password"
            v-model="user.password"
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
  methods: {
    signin() {
      const api = `https://course-ec-api.hexschool.io/api/auth/login`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          const token = res.data.token;
          const expired = res.data.expired;
          document.cookie = `token=${token};expires=${new Date(
            expired * 1000
          )}; path=/`;
          this.$router.push('admin/todolist'); // 方法，轉換頁面
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.loginPage {
  background-image: url(https://images.unsplash.com/photo-1514848567240-a81cb051807a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.login {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  max-width: 400px;
  padding: 0 15px;
}

label {
  line-height: 2;
}

input[type='email'],
input[type='password'] {
  width: 100%;
  line-height: 2;
  border: 1px solid #fff;
  background-color: transparent;
  padding: 0 10px;
  /* 改變輸入文字顏色 */
  margin-bottom: 20px;
  color: #fff;
}

input[type='submit'] {
  background-color: #42a5f5;
  border: 1px solid #42a5f5;
  padding: 5px 20px;
  color: #fff;
  border-radius: 5px;
}

input:focus {
  outline-color: rgba(101, 3, 0, 0.5);
  /*   outline:0; */
}
/* 讓按鈕置中 */
.btn {
  text-align: center;
}
</style>

<template>
  <div>
    <nav
      class="sidebar bg-light font-weight-bold fixed-top fixed-bottom overflow-auto"
    >
      <div class="d-flex flex-column justify-content-between h-100 py-4 pl-5">
        <ul class="nav flex-column">
          <li class="nav-item py-3">
            <h3>後台管理</h3>
          </li>

          <li class="nav-item py-3">
            <router-link class="nav-link" to="/admin/todolist">
              <i class="fas fa-pencil-alt mr-3"></i>
              <span>待辦事項</span>
            </router-link>
          </li>

          <li class="nav-item py-3">
            <router-link class="nav-link" to="/admin/products">
              <i class="fas fa-shopping-cart mr-3"></i>
              <span>產品列表</span>
            </router-link>
          </li>
          <li class="nav-item py-3">
            <router-link class="nav-link" to="/admin/coupons">
              <i class="fas fa-ticket-alt mr-3"></i>
              <span>優惠券列表</span>
            </router-link>
          </li>
          <li class="nav-item py-3">
            <router-link class="nav-link" to="/admin/orders">
              <i class="fas fa-comment-dollar mr-3"></i>
              <span>訂單列表</span>
            </router-link>
          </li>
          <li class="nav-item py-3">
            <router-link class="nav-link" to="/admin/storages">
              <i class="fas fa-image mr-3"></i>
              <span>圖片儲存列表</span>
            </router-link>
          </li>
          <li class="nav-item py-3">
            <router-link class="nav-link" to="/">
              <i class="fas fa-home mr-3"></i>
              <span>前台首頁</span>
            </router-link>
          </li>

          <li class="nav-item py-3">
            <a href="#" class="nav-link" @click.prevent="signout">
              <i class="fas fa-sign-out-alt mr-3"></i>
              <span>登出</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavSidebar',
  data() {
    return {};
  },
  methods: {
    signout() {
      // 清除存在cookie內的 value、到期日
      document.cookie = `hexToken=; expires=; path=/`;
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 296px;
  a:hover {
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>

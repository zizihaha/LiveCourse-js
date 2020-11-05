<template>
  <div class="fixed-top fade-out" :class="{ 'navBg-light': navBgLight }">
    <nav class="navbar navbar-expand-lg navbar-light container">
      <router-link
        class="navbar-brand font-weight-bold text-primary"
        to="/"
        exact
        ><h1>HA.Flower</h1></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav font-weight-bold">
          <!-- <router-link class="nav-item nav-link mr-4" to="/about">
            關於我們
          </router-link> -->
          <router-link class="nav-item nav-link mr-5" to="/products">
            全部產品
          </router-link>
          <router-link class="nav-item nav-link mr-3" to="/favorite">
            <i class="far fa-heart"></i>
          </router-link>
          <router-link class="nav-item nav-link mr-3" to="/cart">
            <i class="fas fa-shopping-cart">
              <span
                v-if="carts.length"
                class="badge badge-danger rounded-circle"
                style="transform: translateX(-4px) translateY(-6px);"
                >{{ carts.length }}</span
              >
            </i>
          </router-link>
          <router-link class="nav-item nav-link" to="/login">
            <i class="fas fa-user-cog"></i>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      carts: [],
      navBgLight: false
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((res) => {
        // console.log('navbar.vue 取得購物車列表', res.data.data);
        this.carts = res.data.data;
      });
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      window.pageYOffset;

      if (scrollTop > 40) {
        this.navBgLight = true;
      } else {
        this.navBgLight = false;
      }
    }
  },
  created() {
    this.getCart();
    this.$bus.$on('get-cart', () => {
      this.getCart();
    });
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}

.fade-out {
  transition: all 0.5s ease-out;
  padding: 10px 0;
}

.navBg-light {
  padding: 0;
  background-color: #f2f2f2;
  /* background-color: #cfbdaa; */
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #7e362c;
}
</style>

<template>
  <!-- fixed-top -->
  <nav class="navbar navbar-expand-lg navbar-light container">
    <router-link class="navbar-brand font-weight-bold" to="/" exact
      >HA.TABBY</router-link
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
      <div class="navbar-nav">
        <!-- <router-link class="nav-item nav-link mr-4" to="/">
            Home
          </router-link> -->
        <router-link class="nav-item nav-link mr-4" to="/about">
          About
        </router-link>
        <router-link class="nav-item nav-link mr-4" to="/products">
          Product
        </router-link>
        <router-link class="nav-item nav-link" to="/cart">
          <i class="fas fa-shopping-cart">
            <span
              v-if="carts.length"
              class="badge badge-danger rounded-circle"
              style="transform: translateX(-4px) translateY(-6px);"
              >{{ carts.length }}</span
            >
          </i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      carts: []
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
        )
        .then((res) => {
          console.log('取得購物車列表', res.data.data);
          this.carts = res.data.data;
        });
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

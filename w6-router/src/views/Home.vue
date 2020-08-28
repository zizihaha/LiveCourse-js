<template>
  <div class="home">
    <div id="nav">
      <router-link to="/about">關於我們</router-link>
      <router-link to="/products">產品列表</router-link>
      <router-link to="/cart">購物車</router-link>
      <router-link to="/admin/products">後台管理頁面</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

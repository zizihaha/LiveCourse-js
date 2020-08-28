<template>
  <div>
    <div id="nav">
      <router-link to="/about">回到前台</router-link>
      <router-link to="/admin/products">產品列表</router-link>
      <router-link to="/admin/coupons">優惠券</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  }
};
</script>

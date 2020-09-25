<template>
  <div>
    <p>我是Dashboard.vue</p>
    <div id="nav">
      <router-link to="/">回到前台</router-link>
      <router-link class="mx-2" to="/admin/products">產品列表</router-link>
      <router-link to="/admin/coupons">優惠券</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {};
  }
};
</script>

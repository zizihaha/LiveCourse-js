<template>
  <div id="app">
    <!-- <P>我是app.vue</P> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import './assets/all';

// h2 {
//   color: #41b883;
// }

// #app {
//   font-family: Microsoft JhengHei, Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;
//   font-size: 20px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     padding: 10px;
//     text-decoration: none;
//     &:hover {
//       color: #db7093;
//     }
//     &.router-link-exact-active {
//       color: #db7093;
//     }
//   }
// }
</style>

<template>
  <div id="app">
    <!-- <loading loader="dots" :active.sync="status.isLoading"> </loading> -->
    <AlertMessage />
    <!-- <transition name="fade"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
import AlertMessage from '@/components/frontend/AlertMessage.vue';

export default {
  name: 'app',
  components: {
    AlertMessage
  },
  data() {
    return {
      // status: {
      //   isLoading: false
      // }
    };
  }
};
</script>

<style lang="scss">
@import './assets/all';

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }

// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }
</style>

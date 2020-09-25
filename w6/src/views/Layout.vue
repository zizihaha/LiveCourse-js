<template>
  <div class="layout">
    <!-- <p>我是Home.vue</p> -->
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Layout',
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

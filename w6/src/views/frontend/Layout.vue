<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/frontend/Navbar.vue';
import Footer from '@/components/frontend/Footer.vue';
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

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
import Loading from 'vue-loading-overlay';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import swiper, { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/css/swiper.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

// Vue.use(VueAwesomeSwiper);
// swiper.use([Navigation, Pagination, Autoplay]);
import App from './App';
import router from './router';
import currencyFilter from './filters/currency';
import unixFilter from './filters/unix';
window.$ = jquery;
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter); // '自訂名稱',import的filter名稱
Vue.filter('unix', unixFilter);

// event bus
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');

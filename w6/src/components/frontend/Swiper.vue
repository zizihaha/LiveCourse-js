<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item in relatedProducts" :key="item.id">
      <router-link
        :to="`/product/${item.id}`"
        @click.native="goProduct"
        class="text-decoration-none text-dark"
      >
        <div class="card" style="width: 16rem;">
          <img :src="item.imageUrl" class="card-img-top" :alt="item.title" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              NT{{ item.price | currency }}
              <span class="text-muted ml-1"
                ><del>NT{{ item.origin_price | currency }}</del></span
              >
            </p>
          </div>
        </div>
      </router-link>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'mySwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['relatedProducts'],
  data() {
    return {
      swiperOptions: {
        speed: 1000, // 1秒切换一次
        loop: false,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          992: {
            //一個螢幕展示的數量
            slidesPerView: 4
            //間距
            // spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15
          }
        }
      }
    };
  },
  methods: {
    goProduct() {
      // 點擊觸發外部事件，前往商品詳細頁
      this.$emit('goProduct');
    }
  }
};
</script>

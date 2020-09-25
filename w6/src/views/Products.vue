<template>
  <div>
    <div
      class="position-relative d-flex align-items-center justify-content-center"
      style="min-height: 400px; margin-top: 56px"
    >
      <div
        class="position-absolute"
        style="top:0; bottom: 0; left: 0; right: 0; background-size: cover;
        background-image: url(https://images.unsplash.com/photo-1550054164-159267834356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); 
        background-position: center center; opacity: 0.5;"
      ></div>
      <h2 class="font-weight-bold">Lorem ipsum.</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <!-- 產品分類 -->
        <div class="col-md-4">
          <div
            class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3"
            id="accordionExample"
          >
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0"
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne"
              >
                <div
                  class="d-flex justify-content-between align-items-center pr-1"
                >
                  <h4 class="mb-0">
                    Lorem ipsum 1
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0"
                id="headingTwo"
                data-toggle="collapse"
                data-target="#collapseTwo"
              >
                <div
                  class="d-flex justify-content-between align-items-center pr-1"
                >
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0"
                id="headingThree"
                data-toggle="collapse"
                data-target="#collapseThree"
              >
                <div
                  class="d-flex justify-content-between align-items-center pr-1"
                >
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 產品列表 -->
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="item in products" :key="item.id">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <router-link :to="`/product/${item.id}`">
                  <img
                    :src="item.imageUrl"
                    class="card-img-top rounded-0"
                    :alt="item.title"
                  />
                </router-link>
                <!-- <a href="#" class="text-dark">
                  <i
                    class="far fa-heart position-absolute"
                    style="right: 16px; top: 16px"
                  ></i>
                </a> -->
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    <!-- <button type="button" @click.prevent="goPage(item)">
                      {{ item.title }}
                    </button> -->
                    <a href="#" @click.prevent="goPage(item)">{{
                      item.title
                    }}</a>
                  </h4>
                  <p class="card-text mb-0">
                    NT${{ item.price }}
                    <span class="text-muted "
                      ><del>NT${{ item.origin_price }}</del></span
                    >
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>

          <pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Product',
  data() {
    return {
      products: []
    };
  },
  components: {
    Pagination
  },
  methods: {
    goPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
        )
        .then((res) => {
          console.log('取得產品列表', res.data);
          this.products = res.data.data;
        });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

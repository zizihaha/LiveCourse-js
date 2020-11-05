<template>
  <div>
    <loading loader="dots" :active.sync="status.isLoading"></loading>
    <div class="container" style="margin-top: 100px">
      <div class="container mt-md-5 mt-3 mb-7">
        <!-- 產品列表 -->
        <div>
          <p v-if="!favProducts.length" class="mt-5 text-center">
            目前沒有收藏的商品喔
          </p>
          <div class="row">
            <div
              class="col-md-4 mt-6"
              v-for="item in favProducts"
              :key="item.id"
            >
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <router-link :to="`/product/${item.title}/${item.id}`">
                  <img
                    :src="item.imageUrl"
                    class="card-img-top rounded-0"
                    :alt="item.title"
                  />
                </router-link>
                <!-- 愛心 -->
                <a href="#" class="text-dark" @click.prevent="delfav(item)">
                  <i
                    class="fas fa-heart position-absolute text-white"
                    style="right: 16px; top: 16px"
                  ></i>
                </a>
                <!-- 購物車 -->
                <a href="#" class="text-dark" @click.prevent="addToCart(item)">
                  <i
                    class="fas fa-shopping-cart position-absolute text-white"
                    style="right: 50px; top: 16px"
                  ></i>
                </a>
                <div class="card-body p-0 my-3">
                  <h4 class="mb-0">
                    <a
                      href="#"
                      class="text-decoration-none"
                      @click.prevent="goPage(item)"
                      >{{ item.title }}</a
                    >
                  </h4>
                  <p class="card-text">
                    NT{{ item.price | currency }}
                    <span class="text-muted ml-1"
                      ><del>NT{{ item.origin_price | currency }}</del></span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorite',
  data() {
    return {
      favProducts: [],
      favProductsId: [],
      status: {
        isLoading: false
      }
    };
  },
  created() {
    this.favProducts = JSON.parse(localStorage.getItem('favList')) || [];
    this.favProductsId = JSON.parse(localStorage.getItem('favId')) || [];
  },
  methods: {
    delfav(item) {
      this.favProducts.forEach((i, index) => {
        if (i.id === item.id) {
          this.favProducts.splice(index, 1);
          localStorage.setItem('favList', JSON.stringify(this.favProducts));
        }
      });
      this.favProductsId.forEach((i, index) => {
        if (i === item.id) {
          this.favProductsId.splice(index, 1);
          localStorage.setItem('favId', JSON.stringify(this.favProductsId));
        }
      });
      this.$bus.$emit('message:push', `${item.title}已取消收藏`, 'danger');
    },
    goPage(item) {
      this.$router.push(`/product/${item.title}/${item.id}`);
    },
    addToCart(item, quantity = 1) {
      this.status.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: item.id,
        quantity
      };
      this.$http
        .post(url, cart)
        .then((res) => {
          // console.log(res, '加入購物車有成功嗎', res.data.data.product.title);
          this.$bus.$emit(
            'message:push',
            res.data.data.product.title + '成功加入購物車',
            'success'
          );
          this.$bus.$emit('get-cart'); // 把加入購物車成功回傳的資料送去 navbar 更新購物車數量

          this.status.isLoading = false;
          this.delfav(item);
        })
        .catch((error) => {
          this.status.isLoading = false;
          this.$bus.$emit(
            'message:push',
            error.response.data.errors[0],
            'danger'
          );
        });
    }
  }
};
</script>

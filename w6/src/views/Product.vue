<template>
  <div class="container" style="margin-top: 56px">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="product.imageUrl"
                class="d-block w-100"
                :alt="product.title"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <!-- 麵包屑 -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0">
            <li class="breadcrumb-item">
              <a class="text-muted" href="./index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a class="text-muted" href="./product.html">Product 這邊還沒寫</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
          </ol>
        </nav>
        <h2 class="font-weight-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-right">
          <del>NT${{ product.price }}</del>
        </p>
        <p class="h4 font-weight-bold text-right">
          NT${{ product.origin_price }}
        </p>
        <div class="d-flex align-items-center">
          <!-- 增加產品數量 -->
          <div class="input-group my-3 mr-2 bg-light rounded">
            <div class="input-group-prepend">
              <!-- 減少 -->
              <button
                class="btn btn-outline-dark border-0 py-2"
                type="button"
                id="button-addon1"
              >
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <input
              type="text"
              class="form-control border-0 text-center my-auto shadow-none bg-light"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value="1"
            />
            <div class="input-group-append">
              <!-- 增加 -->
              <button
                class="btn btn-outline-dark border-0 py-2"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <!-- <a
              href="./checkout.html"
              class="btn btn-dark btn-block py-2"
              @click.prevent="addToCart()"
            >
              加入購物車</a
            > -->
          <button
            type="button"
            class="btn btn-dark btn-block py-2"
            @click.prevent="addToCart()"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <!-- 產品介紹 -->
    <div class="row my-5">
      <div class="col-md-4">
        <p>
          產品介紹1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et
        </p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">
          產品介紹2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor
        </p>
      </div>
    </div>
    <h3 class="font-weight-bold">相關產品</h3>
    <!-- <div class="swiper-container mt-4 mb-5">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted "><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: {
        imageUrl: []
      }
    };
  },
  methods: {
    getProduct() {
      console.log('取得id', this.$route.params.id);
      const { id } = this.$route.params;

      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
        )
        .then((res) => {
          // console.log('取得單一產品', res);
          this.product = res.data.data;
          // console.log(this.product, '產品頁內容');
        });
    },
    addToCart() {
      // alert('addToCart');
      console.log('addToCart', { product: this.product.id, quantity: 1 });
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: this.product.id,
        quantity: 1
      };
      this.$http.post(url, cart).then((res) => {
        console.log(res, '加入購物車有成功嗎');
        // 再修正，目前重複加同一筆產品會跳422出錯
        this.$bus.$emit('get-cart'); // 把加入購物車成功回傳的資料送去 navbar 更新購物車數量
      });
    }
  },
  created() {
    this.getProduct();
  }
};
</script>

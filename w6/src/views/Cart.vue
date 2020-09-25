<template>
  <div class="container" style="margin-top: 56px">
    <div class="mt-3">
      <h3 class="mt-3 mb-4">購物車明細</h3>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 pl-0">產品名稱</th>
                <th scope="col" class="border-0">數量</th>
                <th scope="col" class="border-0">金額</th>
                <th scope="col" class="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr
                class="border-bottom border-top"
                v-for="item in carts"
                :key="item.product.id"
              ></tr> -->
              <tr class="border-bottom border-top">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <!-- <img
                    :src="item.product.imageUrl"
                    :alt="item.product.title"
                    style="width: 72px; height: 72px; object-fit: cover;"
                  /> -->
                  <p class="mb-0 font-weight-bold ml-3 d-inline-block">
                    <!-- {{ item.product.title }} -->
                  </p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px;">
                  <div class="input-group pr-5">
                    <div class="input-group-prepend">
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
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      value="1"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <!-- <p class="mb-0 ml-auto">NT${{ item.product.price }}</p> -->
                </td>
                <td class="border-0 align-middle">
                  <!-- <a href="#" @click.prevent="removeCartItem(item.product.id)"> -->
                  <a href="#">
                    <i class="fas fa-times"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input-group w-50">
            <input
              type="text"
              class="form-control rounded-0 border-bottom border-top-0 border-left-0 border-right-0 shadow-none"
              placeholder="Coupon Code 折扣碼"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark border-bottom border-top-0 border-left-0 border-right-0 rounded-0"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="font-weight-bold mb-4">訂單內容</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    Subtotal 金額
                  </th>
                  <td class="text-right border-0 px-0 pt-4">NT$24,000</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    Payment 付款方式
                  </th>
                  <td class="text-right border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 font-weight-bold">總金額</p>
              <p class="mb-0 h4 font-weight-bold">NT$24,000</p>
            </div>
            <a href="./checkout.html" class="btn btn-dark btn-block mt-4"
              >Lorem ipsum</a
            >
          </div>
        </div>
      </div>
      <div class="my-5">
        <h3 class="font-weight-bold">相關產品(好像要做輪播)</h3>
        <!-- <div class="swiper-container mt-4 mb-5">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080
                    <span class="text-muted "><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      carts: []
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
        )
        .then((res) => {
          console.log('取得購物車列表', res.data.data);
          this.carts = res.data.data;
        });
    }
  },
  created() {
    this.getCart();
  }
};
</script>

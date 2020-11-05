<template>
  <div>
    <loading loader="dots" :active.sync="status.isLoading"></loading>

    <div class="container" style="margin-top: 80px">
      <!-- 結帳進度 -->
      <div class="row justify-content-center">
        <div class="col-md-10">
          <nav class="navbar navbar-expand-lg navbar-light px-0">
            <ul
              class="list-unstyled mb-0 ml-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"
            >
              <li class="mr-md-6 mr-3 position-relative custom-step-line">
                <i
                  class="fas fa-check-circle d-md-inline d-block text-center mr-1 text-success"
                ></i>
                <span class="text-nowrap">購物車</span>
              </li>
              <li class="mr-md-6 mr-3 position-relative custom-step-line">
                <i
                  class="fas fa-check-circle d-md-inline d-block text-center mr-1 text-success"
                ></i>
                <span class="text-nowrap">填寫訂單資料</span>
              </li>
              <li class="mr-md-6 mr-3 position-relative custom-step-line">
                <i
                  class="fas fa-check-circle d-md-inline d-block text-center mr-1 text-success"
                ></i>
                <span class="text-nowrap">付款</span>
              </li>
              <li>
                <i
                  class="fas fa-dot-circle d-md-inline d-block text-center mr-1"
                ></i>
                <span class="text-nowrap">購物完成</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- 結帳進度結束 -->

      <div class="row flex-row-reverse justify-content-center mt-5 pb-5">
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <div
              class="d-flex mb-3"
              v-for="item in order.products"
              :key="item.id"
            >
              <img
                :src="item.product.imageUrl[0]"
                :alt="item.product.title"
                class="mr-2"
                style="width: 48px; height: 48px; object-fit: cover"
              />
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 font-weight-bold">
                    {{ item.product.title }}
                  </p>
                  <p class="mb-0">NT000</p>
                </div>
                <p class="mb-0 font-weight-bold">x{{ item.quantity }}</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-black">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    Subtotal
                  </th>
                  <td class="text-right border-0 px-0 pt-4">NT$24,000</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 font-weight-bold">Total</p>
              <p class="mb-0 h4 font-weight-bold">NT$24,000</p>
            </div>
            <button
              @click="payOrder()"
              class="btn btn-primary btn-block mt-4"
              type="button"
              v-if="!order.paid"
            >
              確認付款 <i class="fas fa-chevron-right ml-2"></i>
            </button>
          </div>
        </div>

        <div class="col-md-6">
          <table class="table">
            <thead>
              <tr>
                <th colspan="2" class="border-top-0">
                  訂單資訊
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="150px">收件人姓名：</td>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <td>收件人手機：</td>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <td>收件人Email：</td>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <td>付款方式：</td>
                <td>{{ order.payment }}</td>
              </tr>
              <tr>
                <td>收件人地址：</td>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr v-if="order.message">
                <td>備註：</td>
                <td>{{ order.message }}</td>
              </tr>
              <tr>
                <td>付款狀態：</td>
                <td>
                  <span v-if="!order.paid" class="text-danger"
                    >尚未付款，付款完成才算完成訂單喔</span
                  >
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Check',
  data() {
    return {
      order: {
        user: {} // 先定義，避免報錯
      },
      orderId: '',
      status: {
        isLoading: false
      }
    };
  },
  created() {
    // 取得網址上參數
    this.orderId = this.$route.params.orderId;

    if (this.orderId) {
      this.getOrder(this.orderId);
    }
  },
  methods: {
    getOrder() {
      // 取得單一筆訂單
      this.status.isLoading = true;

      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;

      this.$http
        .get(url)
        .then((res) => {
          this.status.isLoading = false;
          this.order = res.data.data;
          // console.log(res, '成功取得單一訂單');
        })
        .catch((error) => {
          this.status.isLoading = false;
          console.log(error.response, '取得單一訂單失敗');
        });
    },
    payOrder() {
      this.status.isLoading = true;

      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;

      this.$http
        .post(url)
        .then((res) => {
          // console.log(res, '成功付款');

          if (res.data.data.paid) {
            this.getOrder();
          }

          this.status.isLoading = false;
          this.$bus.$emit('message:push', '訂單付款完成', 'success');
          setTimeout(() => {
            this.$router.push(`/thank-you`);
          }, 3000);
        })
        .catch((error) => {
          this.status.isLoading = false;
          this.$bus.$emit('message:push', '訂單付款失敗', 'danger');
          console.log(error.response.data, '付款失敗');
        });
    }
  }
};
</script>

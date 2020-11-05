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
                  class="fas fa-dot-circle d-md-inline d-block text-center mr-1"
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
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="font-weight-bold mb-4 pt-3">訂單資料</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <!-- <div class="col-md-4">
          <div class="border p-4 mb-4">
            <div
              class="d-flex mb-3"
              v-for="item in carts"
              :key="item.product.id"
            >
              <img
                :src="item.product.imageUrl"
                :alt="item.product.title"
                class="mr-2"
                style="width: 48px; height: 48px; object-fit: cover"
              />
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 font-weight-bold">{{ item.product.title }}</p>
                  <p class="mb-0">
                    NT{{ (item.product.price * item.quantity) | currency }}
                  </p>
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
                <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    Payment
                  </th>
                  <td class="text-right border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 font-weight-bold">總金額</p>
              <p class="mb-0 h4 font-weight-bold">NT$24,000</p>
            </div>
          </div>
        </div> -->
        <div class="col-md-6">
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <label for="ContactName" class="text-black mb-1">收件人姓名</label
              ><span class="text-danger align-middle"> *</span>
              <input
                type="text"
                class="form-control"
                id="ContactName"
                placeholder="請輸入姓名"
                v-model="form.name"
              />
            </div>
            <div class="form-group">
              <label for="ContactMail" class="text-black mb-1"
                >收件人 Email</label
              ><span class="text-danger align-middle"> *</span>
              <input
                type="email"
                class="form-control"
                id="ContactMail"
                aria-describedby="emailHelp"
                placeholder="example@gmail.com"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for="ContactPhone" class="text-black mb-1"
                >收件人手機號碼</label
              ><span class="text-danger align-middle"> *</span>
              <input
                type="tel"
                class="form-control"
                id="ContactPhone"
                placeholder="請輸入手機號碼"
                v-model="form.tel"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress" class="text-black mb-1"
                >收件人地址</label
              ><span class="text-danger align-middle"> *</span>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="請輸入地址"
                v-model="form.address"
              />
            </div>
            <div class="form-group">
              <label for="ContactPhone" class="text-black mb-1">付款方式</label
              ><span class="text-danger align-middle"> *</span>
              <select
                id="inputState"
                class="form-control"
                v-model="form.payment"
              >
                <option>{{ form.payment }}</option>
                <option v-for="item in paymentData" :value="item" :key="item">{{
                  item
                }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="ContactPhone" class="text-black mb-1">備註</label>
              <textarea
                class="form-control"
                rows="3"
                placeholder="message ... "
                v-model="form.message"
              ></textarea>
            </div>

            <div
              class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end d-w-100"
            >
              <router-link class="text-dark mt-md-0 mt-3" to="/cart">
                <i class="fas fa-chevron-left mr-2"></i>上一步
              </router-link>
              <button
                type="submit"
                class="btn btn-primary py-2 px-7 font-weight-bold"
              >
                完成訂購
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {
      carts: [],
      paymentData: [
        'WebATM',
        'ATM',
        'CVS',
        'Barcode',
        'Credit',
        'ApplePay',
        'GooglePay'
      ],
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '請選擇付款方式',
        coupon: '',
        message: ''
      },
      status: {
        isLoading: false
      }
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.status.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http
        .get(url)
        .then((res) => {
          this.status.isLoading = false;
          this.carts = res.data.data;
        })
        .catch((error) => {
          this.status.isLoading = false;
          console.log(error.response);
        });
    },
    createOrder() {
      this.status.isLoading = true;

      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
      const form = { ...this.form };

      this.$http
        .post(url, form)
        .then((res) => {
          // console.log(res, '成功送出訂單');
          this.status.isLoading = false;
          if (res.data.data.id) {
            this.$router.push(`/check/${res.data.data.id}`);
          }
          this.$bus.$emit('get-cart'); // 把加入購物車成功回傳的資料送去 navbar 更新購物車數量
        })
        .catch((error) => {
          this.status.isLoading = false;
          console.log(error.response.data.errors, '送出訂單失敗');
        });
    }
  }
};
</script>

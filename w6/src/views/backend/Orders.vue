<template>
  <div>
    <loading loader="dots" :active.sync="status.isLoading"> </loading>
    <p class="m-5">訂單數量: {{ orders.length }}</p>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">
          <th width="200">
            下單時間
          </th>
          <th width="200">
            購買產品
          </th>
          <th width="130">付款方式</th>
          <th width="130">
            訂單金額
          </th>
          <th width="130">
            是否付款
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- 產品列表 v-for orders -->
        <tr v-for="item in orders" :key="item.id" class="text-center">
          <td>{{ item.created.datetime }}</td>
          <td class="text-left">
            <ul class="list-unstyled">
              <li v-for="(product, index) in item.products" :key="index">
                {{ product.product.title }} x {{ product.quantity }}
              </li>
            </ul>
          </td>
          <td>{{ item.payment }}</td>
          <td>
            {{ item.amount | currency }}
          </td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="item.id"
                v-model="item.paid"
                type="checkbox"
                class="custom-control-input"
                @change="orderPaid(item)"
              />
              <label class="custom-control-label" :for="item.id">
                <span v-if="item.paid" class="text-success">已付款</span>
                <span v-else class="text-danger">未付款</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination :pages="pagination" @emit-pages="getOrders"></pagination>
  </div>
</template>

<script>
import Pagination from '@/components/backend/Pagination.vue';

export default {
  name: 'Oreders',
  components: {
    Pagination
  },
  data() {
    return {
      orders: [],
      pagination: {},
      status: {
        isLoading: false
      }
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}`;
      this.status.isLoading = true;
      this.$http
        .get(api)
        .then((response) => {
          this.orders = response.data.data;
          this.pagination = response.data.meta.pagination;
          // console.log('取得所有後台訂單列表', response.data);

          this.status.isLoading = false;
        })
        .catch((error) => {
          this.status.isLoading = false;
          console.log(error.response);
        });
    },
    orderPaid(item) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;
      this.status.isLoading = true;

      if (!item.paid) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`;
      }

      this.$http
        // 傳送需要更新的那筆資料
        .patch(api)
        .then(() => {
          // console.log('更改訂單付款狀態-成功', response.data);
          this.$bus.$emit('message:push', '已更改訂單付款狀態', 'success');

          this.status.isLoading = false;
          this.getOrders();
        })
        .catch(() => {
          this.status.isLoading = false;
          console.log('更改訂單付款狀態未成功');
          this.$bus.$emit('message:push', '更改訂單付款狀態未成功', 'danger');
        });
    }
  }
};
</script>

<style scoped>
.custom-control-input:checked ~ .custom-control-label::before {
  background-color: #28a745;
  border-color: #28a745;
}
</style>

<template>
  <div>
    <div
      id="delProductModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      @keyup.enter="delProduct"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              @click="delProduct"
              :disabled="status.loadingBtnDel === tempProduct.id"
            >
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
                v-if="status.loadingBtnDel === tempProduct.id"
              ></span>
              確認刪除
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */

export default {
  name: 'DelProductModal',
  data() {
    return {};
  },
  props: ['tempProduct', 'status'],
  methods: {
    // 刪除產品
    delProduct() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      this.status.loadingBtnDel = this.tempProduct.id;
      this.$http
        .delete(url)
        .then(() => {
          this.status.loadingBtnDel = '';
          $('#delProductModal').modal('hide');
          this.$emit('update'); // 把update事件，傳去觸發getproducts()更新產品列表畫面
        })
        .catch((error) => {
          this.status.loadingBtnDel = '';
          console.log(error.response);
        });
    }
  }
};
</script>

<template>
  <div>
    <loading loader="dots" :active.sync="status.isLoading"> </loading>
    <div class="text-right mt-4">
      <div class="form-row">
        <div class="form-group col-md-2">
          <select id="inputState" class="form-control" v-model="input.type">
            <option>全部產品</option>
            <option>新娘捧花</option>
            <option>婚禮佈置</option>
            <option>胸花</option>
            <option>手腕花</option>
            <option>盆花</option>
            <option>單支花</option>
            <option>花束</option>
            <option>多肉盆栽</option>
            <option>非賣品</option>
          </select>

          <span>{{ typeMenu.length }} / </span>
          <span>{{ products.length }}</span>
        </div>
        <div class="form-group col-md-2">
          <button class="btn btn-primary" @click="openModal('new')">
            建立新的產品
          </button>
        </div>
      </div>
    </div>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">
          <th width="130">
            分類
          </th>
          <th width="130">
            產品圖
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="140">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- 產品列表 v-for products -->
        <tr v-for="(item, index) in typeMenu" :key="index" class="text-center">
          <td>{{ item.category }}</td>
          <td>
            <router-link :to="`/product/${item.id}`" target="_blank">
              <img style="width: 100px" :src="item.imageUrl[0]" alt />
            </router-link>
          </td>
          <td class="text-left">{{ item.title }}</td>
          <td>
            {{ item.origin_price | currency }}
          </td>
          <td>
            {{ item.price | currency }}
          </td>
          <td>
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group d-flex">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
                :disabled="status.loadingBtn === item.id"
              >
                <!-- 讀取資料中顯示無法點擊狀態比對，如果目前 loadingBtn 等於 item.id 就加上無法點擊標籤 -->
                <span
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                  v-if="status.loadingBtn === item.id"
                ></span>
                <span v-else> 編輯 </span>
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @emit-pages="getProducts"></pagination>

    <!-- Modal -->
    <product-modal
      ref="productModel"
      :status="status"
      :is-new="isNew"
      @update="getProducts"
    ></product-modal>

    <del-product-modal
      :temp-product="tempProduct"
      :status="status"
      @update="getProducts"
    ></del-product-modal>
  </div>
</template>

<script>
/* global $ */

import Pagination from '@/components/backend/Pagination.vue';
import ProductModal from '@/components/backend/ProductModal.vue';
import DelProductModal from '@/components/backend/DelProductModal.vue';

export default {
  name: 'Products',
  components: {
    Pagination,
    ProductModal,
    DelProductModal
  },
  //props: ['token'], // 為什麼老師範例要接收 token 哪有用到?
  data() {
    return {
      products: [], // 放置 AJAX 回來的產品資料，渲染產品列表。
      pagination: {}, // 放置 AJAX 回來的分頁資料用。
      tempProduct: {
        // 編輯、刪除的暫存資料用
        imageUrl: [] // 必須預先定義 imageUrl 並且是一個陣列，否則新增或更新會出現錯誤
      },
      input: {
        type: '全部產品'
      },
      isNew: false, // 用於判斷接下來的行為是新增產品或編輯產品，切換新增或編輯的api
      status: {
        fileUploading: false, // 用於切換上傳圖片時的小 icon，主要是增加使用者體驗。
        loadingBtn: '', // 編輯按鈕上的讀取效果
        loadingBtnDel: '', // 確認刪除按鈕上的讀取效果
        isLoading: false
      }
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    typeMenu() {
      if (this.input.type === '全部產品') {
        return this.products;
      } else {
        return this.products.filter((item) => {
          return item.category === this.input.type; //把一致的type保留下來
        });
      }
    }
  },
  methods: {
    // 取得所有商品列表
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}&paged=100`;
      this.status.isLoading = true;
      this.$http
        .get(api)
        .then((response) => {
          this.products = response.data.data;
          this.pagination = response.data.meta.pagination;
          this.status.isLoading = false;
        })
        .catch((error) => {
          this.status.isLoading = false;
          console.log(error.response);
        });
    },
    // 開啟Modal視窗，回傳參數判斷是新增、編輯、刪除
    openModal(isNew, item) {
      const editTitle = document.querySelector('.editTitle');
      switch (isNew) {
        case 'new': // 接收的參數為new
          editTitle.textContent = '新增產品';
          this.$refs.productModel.tempProduct = {
            // 如果有點新增產品沒送出，這邊沒清空資料欄位，再點資料會顯示在畫面上
            imageUrl: []
          };
          this.isNew = true; // 判斷是否為新產品
          $('#productModal').modal('show');
          break;
        case 'edit':
          editTitle.textContent = '編輯產品';
          this.status.loadingBtn = item.id; // 為了 loading、disabled 效果，取得資料後清空
          this.tempProduct = Object.assign({}, item);
          // 使用refs觸發子元件方法
          this.$refs.productModel.getProduct(this.tempProduct.id); // 把點擊的產品 id 傳去 productModel 元件內
          this.isNew = false; // 不是新產品，props 傳給 getProduc t切換成編輯商品 API
          break;
        case 'delete':
          // 點了那筆產品資料 item 淺複製一份到暫存 tempProduct
          this.tempProduct = Object.assign({}, item);
          // 開啟刪除產品 modal
          $('#delProductModal').modal('show');
          break;
        default:
          break;
      }
    }
  }
};
</script>

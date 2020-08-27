// 匯入元件
import pagination from './pagination.js';
import productModal from './productModal.js';
import delProductModal from './delProductModal.js';

//全域註冊
Vue.component('pagination', pagination);
Vue.component('productModal', productModal);
Vue.component('delProductModal', delProductModal);
Vue.component('loading', VueLoading);

  
new Vue({
  el: '#app',
  data: {
    products: [],   //放置 AJAX 回來的產品資料，渲染產品列表。
    pagination: {}, //放置 AJAX 回來的分頁資料用。
    tempProduct: {  //編輯、刪除的暫存資料用
      imageUrl: [], //必須預先定義 imageUrl 並且是一個陣列，否則新增或更新會出現錯誤
    },
    isNew : false, //用於判斷接下來的行為是新增產品或編輯產品，切換新增或編輯的api
    status: {     
      fileUploading: false, //用於切換上傳圖片時的小 icon，主要是增加使用者體驗。
      loadingBtn: '',    //編輯按鈕上的讀取效果
      loadingBtnDel: '', //確認刪除按鈕上的讀取效果
      isLoading: false,  //載入效果
    },
    user: {
      token: '',
      uuid: '5f936d6a-78a1-48f0-8517-588ebb2f69c6',
    }, 
  },
  created() {
    // 取得 token 的 cookies
    this.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    // 若無法取得 token 則返回 Login 頁面
    if (this.user.token === '') {
      window.location = 'Login.html';
    }
    //將 Token 加入到 Headers 內驗證，帶上取得的token  (common是 預設值)
    axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;

    this.getProducts();
  },
  methods: {
    // 取得所有商品列表
    getProducts(page = 1) {
      const api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/products?page=${page}&paged=10`;
      this.status.isLoading = true;
      axios.get(api).then((response) => {
        this.products = response.data.data;
        this.pagination = response.data.meta.pagination;
        if (this.tempProduct.id) {
          this.tempProduct = {
            imageUrl: [],  
          };
          $('#productModal').modal('hide');
        }
        this.status.isLoading = false;
      });
    },
    // 開啟Modal視窗，回傳參數判斷是新增、編輯、刪除
    openModal(isNew, item) {
      const editTitle = document.querySelector('.editTitle');
      switch (isNew) {
        case 'new': //接收的參數為new
          editTitle.textContent = '新增產品';
          this.$refs.productModel.tempProduct = {  //如果有點新增產品沒送出，這邊沒清空資料欄位，再點資料會顯示在畫面上
            imageUrl: [],
          };
          this.isNew = true; //判斷是否為新產品
          $('#productModal').modal('show');
          break;
        case 'edit':
          editTitle.textContent = '編輯產品';
          this.status.loadingBtn = item.id;
          this.tempProduct = Object.assign({}, item);
          // 使用refs觸發子元件方法
          this.$refs.productModel.getProduct(this.tempProduct.id); //把點擊的產品id傳去productModel元件內
          this.isNew = false; //不是新產品，props傳給getProduct切換成編輯商品API
          break;
        case 'delete':
          //點了那筆產品資料item淺複製一份到暫存tempProduct
          this.tempProduct = Object.assign({}, item); 
          //開啟刪除產品modal
          $('#delProductModal').modal('show');
          break;
        default:
          break;
      }
    },
  },
})

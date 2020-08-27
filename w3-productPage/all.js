
//價格部份增加$字號、千分號
Vue.filter('money', function(num){
  var parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
  return '$' + parts.join('.');
});


// 註冊全域的表單驗證元件（ValidationProvider、ValidationObserver）
// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

// 將 VeeValidate 完整表單 驗證工具載入 作為全域註冊
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);


// Class 設定檔案
VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});

// 匯入語系檔案
import zh_TW from './zh_TW.js';

// 加入至 VeeValidate 的設定檔案
VeeValidate.localize('tw', zh_TW)


new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1586934917210,
        unit: '盆',
        category: '盆花',
        title: '哎呀花遮到貓了',
        origin_price: 3000,
        price: 2500,
        description: '紅色的花襯托白貓的白',
        content: '買一盆來搭配你家貓咪',
        is_enabled: 1,
        imageUrl: 'https://images.unsplash.com/photo-1585486064194-dcd935337198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
      },
      {
        id: 1196934917910,
        unit: '束',
        category: '捧花',
        title: '就是小清新的捧花',
        origin_price: 2500,
        description: '白色跟任何禮服都搭喔',
        content: '買鮮花有去地方在於，之後可以自己做成乾燥花喔',
        price: 1250,
        is_enabled: 0,
        imageUrl: 'https://images.unsplash.com/photo-1578534102052-70f4c14ee0e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      },
    ],
    tempProduct: {}, 
    /*點擊哪一筆資料，將撈回的那一筆資料淺拷貝複製一份暫存在 tempProduct 裡面，
    修改也在tempProduct內修改，修改完按確認，再推回products[]內
    其主要目的是為了避免直接修改原始資料，所以通常我們會建立一個暫時放資料的地方
    如果直接修改原始資料的話，會變成你不清楚到底資料有沒有真正被修改就直接送出，
    例如你修改後忘記編輯送出導致畫面看似有更新，但實際上並沒有*/
  },
  methods: {
    //綁在產品Modal的「確認」按鈕上，送出產品時判斷有沒有id
    updateProduct() {
      if (this.tempProduct.id) { //如果有id，就做編輯動作
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => { 
          if (item.id === id) { //如果item.id 等於存在tempProduct的id 
            this.products[i] = this.tempProduct; 
          }
        });
      } else {
        const id = new Date().getTime(); //如果沒有id就用時間戳記給id
        this.tempProduct.id = id;
        this.products.push(this.tempProduct); //新增
      }
      this.tempProduct = {}; //清空tempProduct內暫存
      $('#productModal').modal('hide'); //BS手動隱藏產品視窗
    },

    //點擊按鈕，回傳參數判斷是點擊「建立新產品」還是「編輯」、「刪除」
    openModal(isNew, item) { 
      const editTitle = document.querySelector('.editTitle');
      switch (isNew) {
        case 'new': //建立新的產品
          $('#productModal').modal('show'); //BS手動打開產品視窗
          editTitle.textContent = '新增產品';
          this.tempProduct = {}; //如果點了編輯產品後沒有送出，就不會清空tempProduct內容，所以這邊要寫清空，不然會留資料
          break;
        case 'edit': //編輯
          $('#productModal').modal('show'); 
          editTitle.textContent = '編輯產品';
          this.tempProduct = Object.assign({}, item);
          break;
        case 'delete': //刪除
          $('#delProductModal').modal('show');
          this.tempProduct = Object.assign({}, item); //淺拷貝一份進 tempProduct
          break;
        default:
          break;
      }
    },
    //刪除產品
    delProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) { //比對
            this.products.splice(i, 1);
            this.tempProduct = {};
          }
        });
      }
      $('#delProductModal').modal('hide');
    },
  }
});
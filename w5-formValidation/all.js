// 註冊全域的表單驗證元件（ValidationProvider、ValidationObserver）
// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

Vue.component('loading', VueLoading);

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
      name: '',
      email: '',
      tel: '',
      address: '',
      pay: '',
      messenger: '',
      isLoading: false,
  },
  methods: {
    submit(){
      this.isLoading = true; 
      setTimeout(() => {
        this.isLoading = false; 
        window.location = 'thankyou.html';
      }, 1000);
    }
  }
});
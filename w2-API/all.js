let obj = {
  data: {
    uuid: '5f936d6a-78a1-48f0-8517-588ebb2f69c6',
    products: [],
  },
  //取得資料
  getData: function() {
    const vm = this;
    const url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;

    axios.get(url)
      .then(function (response) {
      vm.data.products = response.data.data;
      vm.render();
    })
  },
  
  //渲染頁面
  render: function() {
    const list = document.querySelector('.list');
    let products = this.data.products;
    let str = '';
    products.forEach(function(item) {
      str += `
        <div class="col-12 col-md-6 mb-2">
          <div class="item">
            <img class="img-fluid mb-2" src="${ item.imageUrl[0] }" alt="">
            <h3>${ item.title }</h3>
            <p>${ item.content }</p>
          </div>
        </div>
        `;
    });
    list.innerHTML = str;
  }
}

obj.getData();
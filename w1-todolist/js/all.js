const todoInput = document.querySelector('.newTodo');     //輸入任務內容input
const countTodo = document.querySelector('.taskCount');   //顯示有幾筆任務
const addBtn = document.querySelector('.addTodo');        //綁監聽-新增任務按鈕
const clearAllBtn = document.querySelector('.clearTask'); //綁監聽-清除所有任務
const todoList = document.querySelector('.todoList');     //綁監聽-ul
const body = document.body;                               //綁監聽-enter輸入                                      

//監聽
addBtn.addEventListener('click', addTodo);
clearAllBtn.addEventListener('click', clearAllTask);
todoList.addEventListener('click', doSomething);
body.addEventListener('keydown', enterAdd); 

// 陣列資料，localStorage裡面有資料的話就轉成物件取出，沒有就空陣列
let todoData = JSON.parse(localStorage.getItem('dataList')) || []; 
renderPage(todoData);



// 新增待辦事項
function addTodo() {
    let newTodo = todoInput.value.trim();   //去除多餘空白
    let timeStamp = Math.floor(Date.now()); //用日期產生隨機整數id

    if (newTodo !== '') { //去除空白後不等於空
        todoData.push({       //用push存進todoData陣列內
            id: timeStamp,    //會得到像這樣的id 1593725950221
            title: newTodo,   //去除空白後的input內容
            completed: false, //是否完成了，預設false
        })

        localStorage.setItem('dataList',JSON.stringify(todoData)); //轉成字串存進localStorage 
        renderPage(todoData); //重新渲染畫面
        todoInput.value = ''; //資料送出後 input 欄位清空
    }
}

// 判斷'刪除'或'完成'待辦事項 
function doSomething(e) {
    e.preventDefault(); //取消a連結預設回到頁面最上方功能
    let action = e.target.parentNode.dataset.action; //會選到span上，所以要回到上一層button上選到自定義data-action
    let id = e.target.parentNode.dataset.id;         //會選到input ckeckbox上，所以要回到上一層div上選到自定義data-id
    if (action == 'remove') { //如果自定義 data-action等於remove就執行removeTodo(id)
        removeTodo(id);
        //console.log(id); 這邊的id會是let timeStamp存的那串數字
    } else if (action === 'complete') { 
        completeTodo(id);
    }
}


// 刪除待辦事項
function removeTodo(id) { //這邊傳進來的id會是timeStamp那串id 
    let newIndex = 0; 

    todoData.forEach((item, index) => { //將陣列資料forEach出來
        if (id == item.id) {  //如果傳進來的id等於item.id的話，就讓newIndex等於todoData的索引值
            newIndex = index;   
        }
    })

    todoData.splice(newIndex, 1); //刪除陣列索引值位子資料1筆
    localStorage.setItem('dataList',JSON.stringify(todoData)); 
    renderPage(todoData);
}


//完成待辦事項
function completeTodo(id) {
    todoData.forEach((item) => {
        if (id == item.id) { //如果傳進來id等於todoData索引值
            item.completed = item.completed ? false : true; //就把item.completed修改成false-三元運算
        }
    })
    renderPage(todoData); 
}


//渲染畫面
function renderPage(data) {
    let str = '';
    data.forEach((item) => {
        //88-因為點了 checkbox 文字也要有刪除線，反之，所以 data-action="complete" 寫在上層，讓兩個連動
        //89-如果completed 為true 就加上 checked 顯示勾選狀態
        //90-如果completed 為true 就加上 completed 刪除線 的class
    str += `<li class="todoList_item mb-2">
                <div class="d-flex jc-between align-center">
                    <div data-action="complete" data-id="${item.id}">
                        <input type="checkbox" class="form-check-input pointer" ${item.completed ? 'checked' : ''}>
                        <label class="pointer ${item.completed ? 'completed' : ''}"> ${item.title}</label>
                    </div>
                    <a href="#" class="remove" data-action="remove" data-id="${item.id}">
                        <i class="btns fas fa-times"></i>
                    </a>
                </div>
            </li>`;
    })
    todoList.innerHTML = str; //將組好字串寫進 ul
    countTodo.textContent = data.length;  //陣列長度等於有幾筆任務
}


// 清除所有待辦事項
function clearAllTask(e) {
    e.preventDefault();
    todoData = [];
    localStorage.clear(); //清除 localStorage 內所有資料
    renderPage(todoData);
}


//enter 輸入待辦事項
function enterAdd(e){
    if (e.keyCode === 13){
        addTodo();
    }
}
<template>
  <div class="container mt-5 w-960">
    <div class="container pt-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">待辦事項</span>
        </div>
        <input
          class="form-control"
          type="text"
          placeholder="準備要做的任務"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="addTodo">
            新增
          </button>
        </div>
      </div>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <template v-for="(item, index) in visibilityList">
              <li class="nav-item" :key="index">
                <a
                  class="nav-link"
                  href="#"
                  :class="{ active: visibility == item.value }"
                  @click="visibility = item.value"
                  >{{ item.name }}</a
                >
              </li>
            </template>
          </ul>
        </div>
        <ul class="list-group list-group-flush text-left list-unstyled">
          <li
            class="list-group-item"
            :key="item.id"
            @dblclick="editTodo(item)"
            v-for="item in filteredTodos"
          >
            <div
              class="d-flex justify-content-between"
              v-if="item.id !== cacheTodo.id"
            >
              <div class="form-check">
                <input
                  class="form-check-input"
                  :id="item.id"
                  type="checkbox"
                  @click="changeComplated(item.id)"
                  v-model="item.completed"
                />
                <label
                  class="form-check-label w-600"
                  :for="item.id"
                  :class="{ completed: item.completed }"
                  >{{ item.title }}</label
                >
              </div>

              <div>
                <time class="text-muted mr-4">{{ item.created | unix }}</time>
                <button
                  class="close ml-auto"
                  type="button"
                  aria-label="Close"
                  @click="removeTodo(item)"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>
            <input
              class="form-control"
              type="text"
              v-model="cacheTitle"
              v-if="item.id == cacheTodo.id"
              @keyup.esc="cancelEdit"
              @keyup.enter="doneEdit(item)"
            />
          </li>
          <li v-if="!filteredTodos.length" class="text-center my-5">
            目前沒有任務喔
          </li>
        </ul>
        <div class="card-footer d-flex justify-content-between">
          {{ `還有 ${activeTodosLength} 筆任務未完成`
          }}<a href="#" @click="cleanTodo">清除所有任務</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      newTodo: '',
      todos: [],
      visibilityList: [
        { name: '全部', value: 'all' },
        { name: '進行中', value: 'active' },
        { name: '已完成', value: 'completed' }
      ],
      visibility: 'all',
      cacheTodo: {},
      cacheTitle: ''
    };
  },
  created() {
    // 陣列資料，localStorage 裡面有資料的話就轉成物件取出存進 this.todos，沒有就空陣列
    let example = [
      {
        id: 1602755033670,
        created: 1602780897845,
        title: '本月秋冬新品上架',
        completed: false
      },
      {
        id: 1602755033671,
        created: 1602780897845,
        title: '產品頁 banner 更新',
        completed: false
      }
    ];
    this.todos = JSON.parse(localStorage.getItem('dataList')) || example;
  },
  methods: {
    addTodo() {
      let newTodoStr = this.newTodo.trim(); // 去除多餘空白
      if (!newTodoStr) {
        // 如果有內容
        return;
      }
      this.newTodo = '';
      let submitData = {
        id: Math.floor(Date.now()), // 用日期產生隨機整數id
        created: Date.now(),
        title: newTodoStr, // 去除空白後的input內容
        completed: false // 是否完成了，預設false
      };
      this.todos.push(submitData);
      localStorage.setItem('dataList', JSON.stringify(this.todos));
    },
    removeTodo(item) {
      this.todos.splice(this.getIndex(item.id), 1);
      localStorage.setItem('dataList', JSON.stringify(this.todos));
    },
    editTodo(item) {
      // 點兩下編輯待辦事項
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    cancelEdit() {
      this.cacheTodo = {};
    },
    doneEdit(item) {
      item.title = this.cacheTitle;
      this.cacheTitle = '';
      this.cacheTodo = {};
    },
    cleanTodo() {
      this.todos.splice(0, this.todos.length);
      localStorage.clear(); // 清除 localStorage 內所有資料
    },

    getIndex(id) {
      // 取得目前點擊的任務
      return this.todos.findIndex((el) => el.id == id);
    },
    changeComplated(id) {
      // 勾選是否完成
      let index = this.getIndex(id); // index 等於取得目前點擊的任務
      this.todos[index].completed = !this.todos[index].completed; // 切換
      localStorage.setItem('dataList', JSON.stringify(this.todos));
    }
  },
  computed: {
    filteredTodos() {
      let nowTab = this.visibility;

      switch (nowTab) {
        case 'all':
          return this.todos;
        case 'active':
          return this.todos.filter((item) => !item.completed);
        case 'completed':
          return this.todos.filter((item) => item.completed);
      }
      return nowTab;
    },
    getNewKey() {
      return Math.max(...this.todos.map((el) => +el.id));
    },
    activeTodosLength() {
      return this.todos.filter((item) => !item.completed).length;
    }
  }
};
</script>

<style scoped>
.w-960 {
  max-width: 960px;
}
.w-600 {
  max-width: 600px;
}
.completed {
  text-decoration: line-through;
}
</style>

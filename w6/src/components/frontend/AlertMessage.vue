<template>
  <div
    style="position: fixed; top: 70px; right: 20px; width: 300px; min-width: 300px; z-index: 11000;"
  >
    <div
      v-for="(item, i) in messages"
      :key="i"
      :class="'alert-' + item.status"
      class="alert alert-dismissible fade show"
      role="alert"
    >
      <strong>{{ item.message }} </strong>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      messages: []
    };
  },
  created() {
    // 註冊一個 message: push 的方法
    // status 定義一個 BS 預設樣式
    const vm = this;
    vm.$bus.$on('message:push', (message, status = 'warning') => {
      vm.updateMessage(message, status);
    });
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(Date.now() / 1000);
      this.messages.push({
        message,
        status,
        timestamp
      });
      this.removeMessageWithTiming(timestamp); // 觸發移除自己的函式
    },
    removeMessage(num) {
      // 綁在x按鈕上，點了清除 this.message 陣列內資料
      this.message.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      // 4秒到自動移除
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 4000);
    }
  }
};
</script>

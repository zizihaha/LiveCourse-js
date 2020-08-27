export default {
  template: `<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li
      class="page-item"
      :class="{'disabled': pages.current_page === 1}"
    >
      <a
        class="page-link"
        href="#"
        aria-label="Previous"
        @click.prevent="emitPages(pages.current_page - 1)"
      >
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li
      v-for="(item, index) in pages.total_pages"
      :key="index"
      class="page-item"
      :class="{'active': item === pages.current_page}"
    >
      <a
        class="page-link"
        href="#"
        @click.prevent="emitPages(item)"
      >{{ item }}</a>
    </li>
    <li
      class="page-item"
      :class="{'disabled': pages.current_page === pages.total_pages}"
    >
      <a
        class="page-link"
        href="#"
        aria-label="Next"

        @click.prevent="emitPages(pages.current_page + 1)"
      >
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`,
  data() {
    return {
    };
  },
  props: {pages: {},}, //接遠端傳回的分頁物件資料
  methods: {
    emitPages(item) { //點擊觸發外部事件切換頁，把頁碼item傳去getproduct重新渲染產品列表
      this.$emit('emit-pages', item);//頁碼
    },
  },
};
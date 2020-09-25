<template>
  <div>
    <div class="bg-light py-4">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
        >
          <p class="mb-0 font-weight-bold">要找什麼產品嗎?</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                搜尋
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark py-5">
      <div class="container">
        <div
          class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"
        >
          <router-link class="text-white h4 text-decoration-none" to="/" exact
            >HA.TABBY</router-link
          >
          <ul class="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" class="text-white mx-3"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-white mx-3"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-white ml-3"
                ><i class="fab fa-line"></i
              ></a>
            </li>
          </ul>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
        >
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  }
};
</script>

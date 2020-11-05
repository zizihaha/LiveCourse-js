<template>
  <div>
    <div class="container mt-7">
      <div class="row">
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <a href="#" @click.prevent="toCategory('新娘捧花')">
              <img
                src="https://images.unsplash.com/photo-1589727549629-87f7073149b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                class="card-img-top rounded-0"
                alt="新娘捧花"
              />
              <div class="card-body text-center">
                <h4>新娘捧花</h4>
                <p class="card-text text-muted mb-0">
                  每一位新娘子,一定都要有自己的專屬捧花
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <a href="#" @click.prevent="toCategory('胸花')">
              <img
                src="https://images.unsplash.com/photo-1588775827551-ec4fc340be0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                class="card-img-top rounded-0"
                alt="胸花/手腕花"
              />
              <div class="card-body text-center">
                <h4>胸花/手腕花</h4>
                <p class="card-text text-muted mb-0">
                  配戴式花藝，為婚禮增加身上的小亮點
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <a href="#" @click.prevent="toCategory('婚禮佈置')">
              <img
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                class="card-img-top rounded-0"
                alt="婚禮佈置"
              />
              <div class="card-body text-center">
                <h4>婚禮佈置</h4>
                <p class="card-text text-muted mb-0">
                  客製化製作
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  data() {
    return {};
  },
  created() {},
  methods: {
    toCategory(type) {
      this.$router.push({
        name: 'products',
        params: { categoryType: type }
      });
      // this.$router.push(`/products`);
    }
  }
};
</script>

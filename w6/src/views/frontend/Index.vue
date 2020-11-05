<template>
  <div>
    <div>
      <div
        class="position-absolute"
        style="top:0; bottom:0; left:0; right:0; background-size: cover; 
        background-image: url(https://images.unsplash.com/photo-1448724133127-81fbec83d1ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
        background-position: center center; opacity: 0.3; z-index: -1;"
      ></div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center">
            <h2>2020 Merry Christmas</h2>
            <p class="text-muted mb-0">
              送另一半專屬的許願星星，聖誕花束預購中
            </p>
            <button class="btn btn-primary rounded-0 mt-6">more</button>
          </div>
        </div>
      </div>
    </div>

    <ProductInfo></ProductInfo>

    <!-- 花語介紹 -->
    <!-- <div class="mt-5 text-dark" style="background-color: #e1e8ee;">
      <div class="container">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>百合花語</h3>
                  <p class="my-5">
                    “順利、心想事成、祝福”
                  </p>
                  <p><small>— 百合花語 —</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div> -->
    <!-- 店貓介紹 -->
    <div class="container my-7">
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1585861155989-bde6acb5ad17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">店長-哈哈</h4>
          <p class="text-muted">
            最喜歡綠色植物，似乎有教師夢，花藝課的時候總會站在講桌上呢。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1585486064194-dcd935337198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">副店長-小機靈</h4>
          <p class="text-muted">
            很會幫忙挑花，不知道該買什麼的時候，請她幫你挑就對了。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from '@/components/frontend/ProductInfo.vue';

export default {
  name: 'Index',
  components: {
    ProductInfo
  },

  data() {
    return {};
  }
};
</script>

<template>
  <div class="view">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 d-flex align-items-center">
          <i
            class="fas fa-chevron-left"
            style="margin-left: 8px"
            @click="$router.go(-1)"
          ></i>
          <h3 style="margin-left: 10px">เลือกซื้อ</h3>
        </div>
        <div class="col-12">
          <div class="product-img-show">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    v-for="(item, index) in viewItem.photos"
                    :key="index"
                    :src="item"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center p-2">
            <h5>{{ viewItem.title }}</h5>
            <div>
              <i class="fas fa-share-square"></i>
            </div>
          </div>
          <div class="px-2">
            <b style="color: #e19c68">{{ viewItem.price }} บาท</b>
          </div>
          <div class="product-info p-3">
            <h4>รายละเอียดสินค้า</h4>
            {{ viewItem.detail }}
          </div>
        </div>
        <div class="col-5">
          <button class="btn-action" @click="$router.push('/chat')">แชท</button>
        </div>
        <div class="col-5">
          <button class="btn-action" @click="onClickOrder(viewItem)">
            สั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCatByid, getEquipByid } from "@/firebase.config";

export default {
  async created() {
    let result1 = await getCatByid(this.$route.params.id);
    let result2 = await getEquipByid(this.$route.params.id);
    if (result1) {
      this.viewItem = result1;
    } else {
      this.viewItem = result2;
    }
  },

  methods: {
    onClickOrder(item) {
      this.$store.commit("setOrderList", item);
      this.$router.push("/cart");
    },
  },
  data() {
    return {
      viewItem: "",
    };
  },
};
</script>
<style scoped>
.view {
  padding-bottom: 70px;
}
.btn-action {
  background: #e19c68;
  color: white;
  border-radius: 10px;
  border: 0;
  padding: 5px;
}
button {
  width: 100%;
}
</style>

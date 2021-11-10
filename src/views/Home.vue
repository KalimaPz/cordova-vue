<template>
  <div class="home">
    <div class="container">
      <div class="row mt-2">
        <div class="col-12">
          <h4>Search</h4>
          <div class="row gx-0 card-search">
            <div class="col-1">
              <div>
                <i
                  style="opacity: 0.5"
                  class="fa fa-search"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <div class="col-11">
              <div>
                <input
                  type="text"
                  style="width: 100%"
                  placeholder="ค้นหาร้านค้าและสินค้า"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12 d-flex justify-content-between">
          <button
            class="catagory-btn"
            v-for="(item, index) in catagory"
            :key="index"
          >
            {{ item.title }}
          </button>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12 mb-2 mt-2">
          <span class="btn-title">สายพันธ์ุแมวมาใหม่</span>
        </div>
        <div
          class="col-6 col-md-4 mb-2"
          v-for="item in catagoryCat"
          :key="item"
          @click="$router.push(`/view/${item.id}`)"
        >
          <div class="product-card">
            <div class="product-img">
              <img :src="item.photos[0]" style="width: 100%" />
            </div>
            <div class="product-info">
              {{ item.title }}
            </div>
            <button class="btn-detail px-2">Detail</button>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12 mb-2">
          <span class="btn-title">อุปกรณ์สัตว์เลี้ยง</span>
        </div>
        <div
          class="col-6 col-md-4 mb-2"
          v-for="item in catagoryEquipment"
          :key="item"
          @click="$router.push(`/view/${item.id}`)"
        >
          <div class="product-card">
            <div class="product-img">
              <img :src="item.photos[0]" style="height: 70px" />
            </div>
            <div class="product-info">
              {{ item.name }}
            </div>
            <button class="btn-detail px-2">Detail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCatCollection, getCatEquipment } from "@/firebase.config";
export default {
  created() {
    this.initialData();
  },
  methods: {
    async initialData() {
      this.catagoryCat = await getCatCollection();
      this.catagoryEquipment = await getCatEquipment();
    },
  },
  data() {
    return {
      catagoryCat: [],
      catagoryEquipment: [],
    };
  },
};
</script>

<style scoped>
.home {
  padding-bottom: 50px;
}
.product-card img {
  border-radius: 10px;
}
.btn-title {
  background: #e19c68;
  color: black;
  border-radius: 10px;
  border: 0;
  padding: 5px;
}
.btn-detail {
  background: #e19c68;
  color: black;
  border-radius: 5px;
  border: 0;
  font-size: 0.8em;
  padding: 2px;
}
.catagory-btn {
  background: #e2e0cc;
  border-radius: 15px;
  border: solid 1px #e19c68;
  padding: 2px 8px;
  margin-right: 2px;
}
.card-search {
  background: #e19c68;
  border-radius: 5px;
  padding: 5px;
  color: white;
}
::placeholder {
  color: white;
  opacity: 0.5; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
  opacity: 0.5;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
  opacity: 0.5;
}
input {
  outline: none;
  border: 0;
  background: #e19c68;
  color: white;
}
</style>
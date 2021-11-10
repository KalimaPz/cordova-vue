<template>
  <div>
    <div class="container" style="height:100%; position: relative ">
      <div class="row" v-if="orderList.length > 0">
        <div
          class="col-12 my-1 cart-list"
          v-for="item in orderList"
          :key="item"
        >
          <div class="row align-items-center">
            <div class="col-4 col-md-2">
              <img :src="item.photos[0]" style="width: 100%" />
            </div>
            <div class="col d-flex justify-content-between p-1">
              <div>
                <h5 v-if="item.title">{{ item.title ? item.title : "" }}</h5>
                <h5 v-if="item.name">{{ item.name ? item.name : "" }}</h5>
                <div v-if="item.color">
                  สี: {{ item.color ? item.color : "" }}
                </div>
                <div v-if="item.age">
                  อายุ {{ item.age ? item.age : "" }} ปี
                </div>
                <div v-if="item.type">
                  สายพันธุ์: {{ item.type ? item.type : "" }}
                </div>
                <div>ราคา:{{ item.price ? item.price : "" }} บาท</div>
              </div>
              <div class="d-flex flex-column justify-content-between">
                <div><i class="fa fa-trash" aria-hidden="true" @click="onDelete(item)"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row" >
          <div class="col-12 text-center">
            ยังไม่มีรายการ
          </div>
        </div>
      </div>
       <div class="confirm" v-if="orderList.length > 0">
          <div class="row text-center">
            <div class="col-6 p-3" style="background:#A15538;"><h5>ยอดรวม: {{totalPrice}}</h5> </div>
            <div class="col-6 p-3 " @click="$router.push('/address')" style="background:#38A155;" ><h5>เลือกจัดส่ง</h5></div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      orderList: (state) => state.orderList,
    }),
    totalPrice(){
      let total = 0
      this.orderList.map(v=>{
        total = total + v.price
      })
      return total
    }
  },
  methods: {
    onDelete(item){
      this.$store.commit("deleteOrder",item)
    }
  },
};
</script>
<style scoped>
.confirm {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.cart-list {
  background: #f3f0d0;
}
</style>
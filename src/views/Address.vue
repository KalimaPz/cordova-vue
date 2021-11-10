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
          <h3 style="margin-left: 10px">ที่อยู่จัดส่ง</h3>
        </div>
        <div class="form-login mt-2">
          <small>ชื่อของที่อยู่</small> <small style="color: red">*</small>
          <input
            type="text"
            placeholder="เช่น บ้าน,ที่ทำงาน,โรงเรียน"
            class="mb-1"
            v-model="nameaddress"
          />
          <small>ข้อมูลการติดต่อ</small> <small style="color: red">*</small>
          <input
            type="text"
            v-model="name"
            placeholder="ชื่อ-นามสกุล"
            class="mb-1"
          />
          <input
            type="text"
            v-model="tel"
            placeholder="เบอร์โทรศัพท์"
            class="mb-1"
          />
          <small>ที่อยู่</small> <small style="color: red">*</small>
          <textarea
            placeholder="รายละเอียดที่อยู่"
            v-model="address"
            class="mb-1"
          />

          <div>
            <button
              type="submit"
              class="mt-2 btn-action"
              @click="confirmOrder()"
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createOrder } from "@/firebase.config";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      orderList: (state) => state.orderList,
    }),
    totalPrice() {
      let total = 0;
      this.orderList.map((v) => {
        total = total + v.price;
      });
      return total;
    },
  },
  data() {
    return {
      nameaddress: null,
      name: null,
      tel: null,
      address: null,
    };
  },
  methods: {
    async confirmOrder() {
      let data = {
        userid: localStorage.getItem("user"),
        nameaddress: this.nameaddress,
        name: this.name,
        tel: this.tel,
        address: this.address,
        product: this.orderList,
        total: this.totalPrice,
      };
      let isConfirm = confirm("ยืนยันการทำรายการ ?");
      if (isConfirm) {
        await createOrder(data)
        alert("ดำเนินการเสร็จสิ้น")
        this.$router.push("/");
        this.$store.commit("resetOrder");
      }
    },
  },
};
</script>
<style scoped>
small {
  color: black;
}
button {
  width: 100%;
}
input,
textarea {
  background: #f2efd0;
  outline: none;
  width: 100%;
  border: solid 2px #797868;
  border-radius: 10px;
  padding: 8px;
  color: #a15538;
}
::placeholder {
  color: #a15538;
  opacity: 0.5; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #a15538;
  opacity: 0.5;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #a15538;
  opacity: 0.5;
}
.form-login {
  color: #a15538;
  font-weight: 500;
}
.view {
  padding-bottom: 20px;
}
.btn-action {
  background: #4d7c05;
  color: white;
  border-radius: 10px;
  border: 0;
  padding: 10px;
}
button {
  width: 100%;
}
</style>

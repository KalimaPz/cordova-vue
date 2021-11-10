<template>
  <div>
    <div class="container">
      <div class="col-12 d-flex align-items-center">
        <i
          class="fas fa-chevron-left"
          style="margin-left: 8px"
          @click="$router.go(-1)"
        ></i>
        <h3 style="margin-left: 10px">ติดตามการสั่งซื้อของฉัน</h3>
      </div>
      <div class="row justify-content-center mt-2">
        <div class="col-12">
          <div class="d-flex align-items-center">
            <div
              class="
                stepper
                d-flex
                justify-content-center
                align-items-center
                flex-column
              "
            >
              <div>1</div>
            </div>
            <div
              class="horizontal"
              style="background: #4d7c05 !important"
            ></div>
            <div
              class="stepper d-flex justify-content-center align-items-center"
            >
              2
            </div>
            <div
              class="horizontal"
              style="background: #e19c68 !important"
            ></div>
            <div
              class="stepper d-flex justify-content-center align-items-center"
            >
              3
            </div>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-between">
          <div>กำลังจัดส่ง</div>
          <div>ที่ต้องได้รับ</div>
          <div>สำเร็จ</div>
        </div>
      </div>
      <div class="card mt-3 p-2">
        <div style="background:#E29C69; width:100px; border-radius:5px;" class='text-center'>ร้านเพื่อแมว</div>
        <div class="row mt-2">
          <div class="col-3"><img src="https://www.proplan.co.th/sites/default/files/body-image_6.jpg" style="width:100%; border-radius:5px;"></div>
          <div class="col">
            <h5>แมวไทยโบราณวิเชียรมาศแท้</h5>
            <div>เพศ:เมีย</div>
            <div>อายุ:5 เดือน</div>
            <div>วัคซีน:ครบ</div>
            <div>โรคประจำตัว:-</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script> 
<style scoped>
.card {
  background: #f2efd0;
  border-radius: 8px;
}
.stepper {
  width: 20px;
  height: 20px;
  background: #4d7c05;
  border-radius: 50%;
  font-size: 0.8em;
}
.horizontal {
  height: 5px;
  width: 50%;
  background: red;
}
</style>
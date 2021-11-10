<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 my-1 cart-list" v-for="item in 5" :key="item">
          <div class="row ">
            <div class="col-4 col-md-2 px-0">
              <img
                src="https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_square.jpg"
                width="100%"
              />
            </div>
            <div class="col d-flex justify-content-between">
              <div>
                <h5>แมวไทยโบราณวิเชียรแท้</h5>
                <div>เพศเมีย</div>
                <div>อายุ 5 เดือน</div>
                <div>ฉีดวัคซีน: ครบ</div>
                <div>โรคประจำตัว: -</div>
                <div>ราคา: 5000 บาท</div>
              </div>
              <div class="d-flex flex-column justify-content-between">
                <div><i class="fa fa-trash" aria-hidden="true"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-list {
  background: #f3f0d0;
}
</style>
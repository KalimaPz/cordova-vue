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
          />
          <small>ข้อมูลการติดต่อ</small> <small style="color: red">*</small>
          <input type="text" placeholder="ชื่อ-นามสกุล" class="mb-1" />
          <input type="text" placeholder="เบอร์โทรศัพท์" class="mb-1" />
          <small>ที่อยู่</small> <small style="color: red">*</small>
          <textarea placeholder="รายละเอียดที่อยู่" class="mb-1" />

          <div>
            <button type="submit" class="mt-2 btn-action">บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
small {
  color: black;
}
button {
  width: 100%;
}
input,textarea {
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
  background: #4D7C05;
  color: white;
  border-radius: 10px;
  border: 0;
  padding: 10px;
}
button {
  width: 100%;
}
</style>

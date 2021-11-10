<template>
  <div>
    <div class="container">
      <div class="row">
        <h3 class="mt-1">My Profile</h3>
        <div class="col-12 text-center mt-3d">
          <img
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg"
            style="width: 110px; height: 110px; border-radius: 50%"
          />
          <h3 style="color: #b06f51">Profile</h3>
        </div>
      </div>
      <div class="card-menu p-4">
        <div class="menu-item d-flex align-items-center" @click="$router.push('/track')">
          <div class="menu-img">
            <i class="fas fa-shopping-cart" style="font-size: 1.3em"></i>
          </div>
          <div class="menu-title" style="padding-left: 10px">
            <h6>ติดตามการสั่งซื้อของฉัน</h6>
          </div>
        </div>
        <div class="menu-item d-flex align-items-center">
          <div class="menu-img">
            <i class="fas fa-question" style="font-size: 1.3em"></i>
          </div>
          <div class="menu-title" style="padding-left: 10px">
            <h6>Support</h6>
          </div>
        </div>
        <div class="text-center mt-5">
          <button @click=" onLogout() " >Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onLogout() {
      let isconfirm = confirm("คุณต้องการออกจากระบบ ?");
      if (isconfirm) {
        localStorage.removeItem("user");
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
button{
    background:#E2E0CC;
    border:0;
    padding:5px 20px;
    border-radius: 10px;
    color:black;
}
.card-menu {
  background: #e29c69;
  border-radius: 5px;
  height: 58vh;
}
.menu-img {
  width: 30px;
  text-align: center;
}
</style>
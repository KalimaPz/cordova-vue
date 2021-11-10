<template>
  <div>
    <div class="row align-items-center footer">
      <div class="col-4 text-center" @click="$router.push('/')">
        <i class="fas fa-store"></i>
      </div>
      <div class="col-4 text-center" @click="$router.push('/cart')">
        <i class="fas fa-shopping-cart"></i>
      </div>
       <div class="col-4 text-center" @click="$router.push('/profile')" >
        <img src="@/assets/profile.jpg"  width="45" />
      </div>
      <!-- <div class="col-3 text-center">
        <i class="fas fa-sign-out-alt" @click="onLogout()"></i>
      </div> -->
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: #e19c68;
  height: 50px;
}
.footer i {
  font-size: 1.5em;
  background: #f2efcf;
  border-radius: 50%;
  padding: 10px;
}
.footer img {
  border-radius: 50%;
}
</style>
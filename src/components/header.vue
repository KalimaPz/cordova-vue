<template>
  <div>
    <div class="container" >
      <div
        class="row"
        v-if="$route.path == '/login' || $route.path == '/register'"
      >
        <div class="col-12 text-center">
          <img src="@/assets/LogoCatBag.png" @click="$router.push('/')" class="mb-2" width="200" />
        </div>
      </div>
      <div class="row align-items-end " v-else>
        <div class="col-6" >
          <img src="@/assets/LogoCatBag.png"  @click="$router.push('/')" width="100" class="mb-2" />
        </div>
        <div class="col d-flex justify-content-end"><div class="mb-2"><i class="fa fa-envelope" aria-hidden="true" @click="$router.push('/chat')"></i></div></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.header-wrapper {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background: #f3f0d0;
}
</style>
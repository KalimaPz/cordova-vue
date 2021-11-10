<template>
  <div>
    <Header />
    <router-view
      :class="
        $route.path != '/login' && $route.path != '/register'
          ? 'main-content'
          : 'main-content-login-register'
      "
    />
    <Footer v-if="$route.path != '/login' && $route.path != '/register'" />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.prev-button , .next-button{
  display: none;
}
.main-content {
  height: calc(100vh - 100px);
  padding: 5px 0px;
  z-index: 1 !important;
  overflow: auto;
  background: #e2e0cc;
}
.main-content-login-register {
  padding: 5px 0px;
  z-index: 1 !important;
  overflow: auto;
  background: #e2e0cc;
}
body {
  background: #f3f0d0;
}
.btn-main {
  background: #e19c68;
  color: #a15538;
  border-radius: 5px;
  border: 0;
  font-weight: 500;
  padding: 10px;
}
</style>

<template>
  <div class="login-panel mt-2">
    <div class="container">
      <div class="login-card">
        <div class="cat-face">
          <img src="@/assets/Ellipse19.png" alt="" />
        </div>
        <div class="row" style="height: 100%">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <div class="form-login">
              <div>E-Mail</div>
              <input type="text" class="mb-1" v-model="username" />

              <div>Password</div>
              <input type="password" v-model="password" />
              <div>
                <button type="submit" class="mt-2 btn-main" @click="handleSubmit()">Login</button>
              </div>
              <div>
                <button type="submit" class="mt-2 btn-main">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onLoginCustom } from "@/firebase.config";
export default {
  async mounted(){
  },
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    async handleSubmit(){
     await onLoginCustom(this.username,this.password)
    }
  }
}
</script>
<style scoped>
button {
  width: 100%;
}
input {
  background: transparent;
  outline: none;
  border: 0;
  border-bottom: 2px solid #e19c68;
}
.form-login {
  color: #a15538;
  font-weight: 500;
}
.cat-face {
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translate(-50%, 0);
}
.login-card {
  margin-top: 60px;
  height: 300px;
  background: #f3f0d0;
  border-radius: 5px;
  position: relative;
}
.login-panel {
  background: #e7e5cd;
   padding-bottom: 50px;
}
</style>
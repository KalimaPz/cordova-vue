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
              <div>Full Name</div>
              <input type="text" class="mb-1" v-model="name" />
              <div>E-mail</div>
              <input type="text" class="mb-1" v-model="username" />
              <div>Password</div>
              <input type="password" v-model="password" />
              <div>Confirm</div>
              <input type="password" />
              <div>
                <button type="submit" class="mt-2 btn-main" @click="handleSubmit()">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUser } from "@/firebase.config";
export default {
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    async handleSubmit(){
      let data = {
        username:this.username,
        password:this.password,
        name:this.name
      }
      await createUser(data);
      alert("สมัครสมาชิกเสร็จสิ้น")
      this.$router.push('/login')
    } 
  },
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
  color: #e19c68;
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
  height: 350px;
  background: #f3f0d0;
  border-radius: 5px;
  position: relative;
}
.login-panel {
  padding-bottom: 50px;
  background: #e7e5cd;
}
</style>
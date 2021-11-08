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
              <input type="text" class="mb-1" />
              <div>E-mail</div>
              <input type="text" class="mb-1" />
              <div>Password</div>
              <input type="password" />
              <div>Confirm</div>
              <input type="password" />
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
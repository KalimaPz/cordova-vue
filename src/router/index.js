import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import View from "../views/View.vue";
import Adress from "../views/Address.vue";
import Cart from "../views/Cart.vue";
import Chat from "../views/Chat.vue";
import Profile from "../views/Profile.vue";
import Track from "../views/Track.vue";
import UserLocation from "../views/UserLocation.vue"
const checkLogin = (to, from, next) => {
  let user = localStorage.getItem('user')
  if (user) {
    next();
  } else {
    window.location.href = "/login"
  }
}
const isLoged = (to, from, next) => {
  let user = localStorage.getItem('user')
  if (user) {
    window.location.href = "/"
  } else {
    next();
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: (to, from, next) => {
      checkLogin(to, from, next)
    },
    component: Home,
  },
  {
    path: "/track",
    name: "Track",
    beforeEnter: (to, from, next) => {
      checkLogin(to, from, next)
    },
    component: Track,
  },
  {
    path: "/profile",
    name: "Profile",
    beforeEnter: (to, from, next) => {
      checkLogin(to, from, next)
    },
    component: Profile,
  },
  {
    path: "/address",
    name: "Address",
    beforeEnter: (to, from, next) => {
      checkLogin(to, from, next)
    },
    component: Adress,
  },
  {
    path: "/cart",
    name: "Cart",
    beforeEnter: (to, from, next) => {
      checkLogin(to, from, next)
    },
    component: Cart,
  },
  {
    path: "/chat",
    name: "Chat",
    beforeEnter: (to, from, next) => {
      checkLogin(to, from, next)
    },
    component: Chat,
  },
  {
    path: "/view/:id",
    name: "View",
    props: true,
    beforeEnter: (to, from, next) => {
      checkLogin(to, from, next)
    },
    component: View,
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: (to, from, next) => {
      isLoged(to, from, next)
    },
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: (to, from, next) => {
      isLoged(to, from, next)
    },
    component: Register,
  },

  {
    path: "/userLocation",
    name: "UserLocation",
    // beforeEnter: (to, from, next) => {
    //   isLoged(to, from, next)
    // },
    component: UserLocation,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

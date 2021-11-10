// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyClG4r2a3nqYxAZPDEiPck7t-NcIc1rFfk",
  authDomain: "panya-firebase.firebaseapp.com",
  projectId: "panya-firebase",
  storageBucket: "panya-firebase.appspot.com",
  messagingSenderId: "202307098838",
  appId: "1:202307098838:web:d99f7ea4c9e294c9735177"
};

// Initialize Firebase
const app = firebase.initializeApp(config);
const db = app.firestore()

const userCollecttion = db.collection('users');

export const createUser = (user) => {
  return userCollecttion.add(user)
}

export const onLoginCustom = async (username, password) => {
  userCollecttion.where("username", "==", `${username}`).where("password", "==", `${password}`).get().then(rs => {
    if (rs.docs.length > 0) {
      console.log('ล็อคอินสำเร็จ', rs.docs[0].id)
      return true
    } else {
      alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง")
      return false;
    }
  }).catch(function (error) {
    console.log("ERROR", error);
  });
}
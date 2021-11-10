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
const catCollecttion = db.collection('Cats');
const equipmentCollecttion = db.collection('cat equipment');
const orderCollecttion = db.collection('orders');
export const createUser = (user) => {
  return userCollecttion.add(user)
}
export const createOrder = (order) => {
  return orderCollecttion.add(order)
}

export const onLoginCustom = async (username, password) => {
  return await userCollecttion.where("username", "==", `${username}`).where("password", "==", `${password}`).get().then(rs => {
    if (rs.docs.length > 0) {
      console.log('ล็อคอินสำเร็จ', rs.docs[0].id)
      localStorage.setItem('user', rs.docs[0].id)
      return true
    } else {
      alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง")
      return false;
    }
  }).catch(function (error) {
    console.log("ERROR", error);
  });
}
export const getCatCollection = async () => {
  let dataList = []
  await catCollecttion.get().then(rs => {
    rs.forEach(v => {
      dataList.push({ id: v.id, ...v.data() })
    })
  })
  return dataList
}
export const getCatEquipment = async () => {
  let dataList = []
  await equipmentCollecttion.get().then(rs => {
    rs.forEach(v => {
      dataList.push({ id: v.id, ...v.data() })
    })
  })
  return dataList
}
export const getCatByid = async (id) => {
  return await catCollecttion.doc(id).get().then(doc => {
    return doc.data()
  })
}
export const getEquipByid = async (id) => {
  return await equipmentCollecttion.doc(id).get().then(doc => {
    return doc.exists ? doc.data() : null;
  })
}
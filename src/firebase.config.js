import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKCxMEI-ykZ4rHoA7v4kMDDXV-mLbPhI8",
  authDomain: "food-delivery-app-ece10.firebaseapp.com",
  databaseURL: "https://food-delivery-app-ece10-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-ece10",
  storageBucket: "food-delivery-app-ece10.appspot.com",
  messagingSenderId: "330028879440",
  appId: "1:330028879440:web:486aa80c6121f9a6960b55",
};

const app=getApps.length>0? getApp():initializeApp(firebaseConfig);

const firestore=getFirestore(app);
const storage=getStorage(app);

export {app,firestore,storage};
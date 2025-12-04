import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqpAEDdukJO1vVruDwpROkAnvdLcKkxZg",
  authDomain: "aula-native-thais.firebaseapp.com",
  projectId: "aula-native-thais",
  storageBucket: "aula-native-thais.firebasestorage.app",
  messagingSenderId: "156975607348",
  appId: "1:156975607348:web:9b061a385726c4fccca461",
  measurementId: "G-VXX26X5FFN"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
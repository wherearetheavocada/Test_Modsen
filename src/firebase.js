
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkZjDPPeTJOV3xHQccS3KcIlDLON6cAcE",
  authDomain: "fir-38369.firebaseapp.com",
  projectId: "fir-38369",
  storageBucket: "fir-38369.appspot.com",
  messagingSenderId: "20489409633",
  appId: "1:20489409633:web:25b579ddd16401f66b4620"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
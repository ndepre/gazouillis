
import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiAyELxf51x2iOGS0iIUlXtOkR_al57No",
  authDomain: "gazouillis-a981c.firebaseapp.com",
  projectId: "gazouillis-a981c",
  storageBucket: "gazouillis-a981c.appspot.com",
  messagingSenderId: "124438917195",
  appId: "1:124438917195:web:591a9b5a21ac7735ce5dce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
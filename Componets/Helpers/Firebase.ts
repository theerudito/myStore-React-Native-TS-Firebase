/* eslint-disable */
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyB9W0u8Hy2KFdiAVdngiEKDXF_rCwuWiZ0',
  authDomain: 'eccomerse-byerudito.firebaseapp.com',
  projectId: 'eccomerse-byerudito',
  storageBucket: 'eccomerse-byerudito.appspot.com',
  messagingSenderId: '720081592912',
  appId: '1:720081592912:web:c744afae73ef360b602755',
  measurementId: 'G-JSXGFQJ7C9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app);
export const authFirebase = getAuth(app);
export const storageFirebase = getStorage(app);
const analytics = getAnalytics(app);

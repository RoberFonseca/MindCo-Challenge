// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBBeYVBcljMr9AQDZ9OZJ_t3J0HxB0MwpA',
  authDomain: 'mindocotine-user.firebaseapp.com',
  projectId: 'mindocotine-user',
  storageBucket: 'mindocotine-user.appspot.com',
  messagingSenderId: '858383798637',
  appId: '1:858383798637:web:8c77e1ab95a21368490a64',
};

const firebaseConfigForInteractions = {
  apiKey: 'AIzaSyB8gsgbYFrVoZfmDNDPdN-u_h728ASHVKI',
  authDomain: 'interactions-mindco.firebaseapp.com',
  projectId: 'interactions-mindco',
  storageBucket: 'interactions-mindco.appspot.com',
  messagingSenderId: '235591111530',
  appId: '1:235591111530:web:775cda6e149e5264288b13',
  measurementId: 'G-XL7LE5QH4L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const appForInteractions = initializeApp(
  firebaseConfigForInteractions,
  'interactions'
);
const dbForInteractions = getFirestore(appForInteractions);

export const saveUser = (name, age, email) => {
  age = Number(age);
  addDoc(collection(db, 'users'), { name, age, email })
    .then(() => {
      const success = true;
      const timestamp = new Date();

      saveUserInteraction(name, email, success, timestamp);
      console.log('User saved successfully!');
    })
    .catch((error) => {
      const success = false;
      const timestamp = new Date();

      saveUserInteraction(name, email, success, timestamp);

      console.error('Error saving user:', error);
      alert(
        'There was an error saving your information. Please try again later.'
      );
    });
};

export const saveUserInteraction = (name, email, success, timestamp) => {
  addDoc(collection(dbForInteractions, 'interactions'), {
    name,
    email,
    success,
    timestamp,
  })
    .then(() => {
      console.log('Interaction saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving interaction:', error);
      alert(
        'There was an error saving your interaction. Please try again later.'
      );
    });
};

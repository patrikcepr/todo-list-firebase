// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import { getDatabase } from '@firebase/database';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCEBUm1Tk0WON0EBZSrhN0_CMmvy3PAORY',

  authDomain: 'todo-list-firebase-b421c.firebaseapp.com',

  databaseURL:
    'https://todo-list-firebase-b421c-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'todo-list-firebase-b421c',

  storageBucket: 'todo-list-firebase-b421c.appspot.com',

  messagingSenderId: '619853635415',

  appId: '1:619853635415:web:eb0eca6170646042cda812',
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

export default db;

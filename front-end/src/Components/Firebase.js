import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBSXEbRn05Wwrr_358MbtiWarpmF2KOWB8',
  authDomain: 'fspp-gg-video-games.firebaseapp.com',
  databaseURL: 'https://fspp-gg-video-games-default-rtdb.firebaseio.com',
  projectId: 'fspp-gg-video-games',
  storageBucket: 'fspp-gg-video-games.appspot.com',
  messagingSenderId: '150147601838',
  appId: '1:150147601838:web:c0d4d1654b11db7c29a43f',
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;

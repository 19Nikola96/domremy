import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEKYlEQdD3fjFqP4wK59YoK5hfBYf0Bc8",
    authDomain: "domremygym.firebaseapp.com",
    databaseURL: "https://domremygym-default-rtdb.firebaseio.com",
    projectId: "domremygym",
    storageBucket: "domremygym.appspot.com",
    messagingSenderId: "355132281970",
    appId: "1:355132281970:web:d1b6fc8b740ef0fa595eeb"
}

let data

if (!firebase.apps.length) {
    data = firebase.initializeApp(firebaseConfig);
}
    
export default data
// const gymStorage = firebase.storage()

// export { gymStorage };
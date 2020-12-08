import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAhUvRbVJgi8zgU2jhFF84cYutwv1qeRho",
    authDomain: "globofactory-a9f25.firebaseapp.com",
    projectId: "globofactory-a9f25",
    storageBucket: "globofactory-a9f25.appspot.com",
    messagingSenderId: "677934492356",
    appId: "1:677934492356:web:4f1d67e632da02deed7791"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const googleLogin = () => {
    return auth.signInWithPopup(googleProvider)
}

export {
    auth,
    googleLogin
}
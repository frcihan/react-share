import firebase from "firebase/app";
import "firebase/auth";
//firestore

const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const prodConfig = {};

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.firebaseAuth = firebase.auth();
    }

    // register registerWithEmailAndPassword
    async register(displayName, email, password) {
        try {
            await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
            this.firebaseAuth.currentUser.updateProfile({
                displayName,
            });
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    // sign in with google GoogleAuthProvider
    useGoogleProvider() {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        googleProvider.setCustomParameters({ prompt: "select_account" });
        this.firebaseAuth.signInWithPopup(googleProvider);
    }

    // logout signOut
    signOut() {
        this.firebaseAuth.signOut();
    }
    
    // login  signInWithEmailAndPassword
    signIn(email, password) {
        this.firebaseAuth.signInWithEmailAndPassword(email, password);
    }


    // forgot password sendPasswordResetEmail


}

export default new Firebase();
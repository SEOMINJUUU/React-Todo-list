import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../config/firebaseConfig';
import styles from './auth.module.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
// });

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

const SignIn = ({ user, signOut, signInWithGoogle }) => {
  return (
    <div className={styles.container}>
      {user ? (
        <span>Hello, {user.displayName}</span>
      ) : (
        <span>Please sign in.</span>
      )}
      {user ? (
        <button className={styles.signOut} onClick={signOut}>
          <img
            className={styles.googleLogo}
            src="https://i.stack.imgur.com/22WR2.png"
            alt="google-logo"
          />
          Sign out
        </button>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
};

//export default SignIn;
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(SignIn);

import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { useNavigate } from "react-router";

function AuthPage() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // You can now use this info and store it in state or context.
        console.log({ user, token });
        // redirect to dashboard
        // navigate("/dashboard");
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  return (
    <div>
      <h1>Authentication</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default AuthPage;

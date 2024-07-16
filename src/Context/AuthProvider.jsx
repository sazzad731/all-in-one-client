import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(app)

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  
  const createUserWithPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider);
  }

  const emailPasswordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const authInfo = {
    user,
    setUser,
    googleSignIn,
    emailPasswordSignIn,
    createUserWithPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
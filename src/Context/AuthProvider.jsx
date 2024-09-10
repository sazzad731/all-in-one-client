import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
  deleteUser,
} from "firebase/auth";

const auth = getAuth(app)

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  const [ isLoading, setLoading ] = useState(true);
  
  const createUserWithPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const emailPasswordSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (info)=>{
    setLoading(true);
    return updateProfile(auth.currentUser, info)
  }

  const logOut = ()=>{
    return signOut(auth);
  }

  const deleteAccount = ()=>{
    return deleteUser(user);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])
  
  const authInfo = {
    isLoading,
    user,
    setUser,
    googleSignIn,
    emailPasswordSignIn,
    createUserWithPassword,
    updateUserInfo,
    logOut,
    deleteAccount,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
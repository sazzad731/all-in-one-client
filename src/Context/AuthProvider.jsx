import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app)

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  
  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider);
  }
  
  const authInfo = {
    user,
    setUser,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import app from '../Firebase/Firabase.config';
export const AuthProvider = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {

    // loding 
    const [loader ,setLoader] = useState(true)

    // current user
    const [user, setuser] = useState()

    // gooogle login
    const provider = new GoogleAuthProvider();

    // email password login
    const emailLogin =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const googlesingup = ()=>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    // login email 
    const loginemail =( email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login google
    const googleLogin = ()=>{
        setLoader(true)
        return signInWithRedirect(auth, provider);
    }

    // logout all
    const logOut =()=>{
        signOut(auth)
    }

    // current user 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (crentuser) => {
                setuser(crentuser)
                setLoader(false)
          });
          return () =>{
            unsubscribe();
          }
    },[])

    // context pass 
    const authinfo ={emailLogin,googlesingup,logOut,user,loginemail,googleLogin,loader}

    return (
        <AuthProvider.Provider value={authinfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firabase.config';
export const AuthProvider = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {

    // current user
    const [user, setuser] = useState()

    // gooogle login
    const provider = new GoogleAuthProvider();

    // email password login
    const emailLogin =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const googleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }

    // login email 
    const loginemail =( email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut =()=>{
        signOut(auth)
    }

    // current user 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (crentuser) => {
          
                setuser(crentuser)
                
          
            // setLoader(false)
          });

          return () =>{
            unsubscribe();
          }
    },[])

    // context pass 
    const authinfo ={emailLogin,googleLogin,logOut,user,loginemail}

    return (
        <AuthProvider.Provider value={authinfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
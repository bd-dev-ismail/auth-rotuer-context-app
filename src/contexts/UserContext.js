import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    
    //declare a state
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    //provider
    const googleProvider = new GoogleAuthProvider();
    //Register
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //SignIN
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //SinnWithGoogle
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    //Sign Out
    const logOut = ()=>{
        return signOut(auth);
    }

    //Auth State change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user);
            setLoading(false)
            console.log('auth', user);
        })
        //clean up the subscribe
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = { user, loading,  createUser, signIn, logOut, signInWithGoogle };

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;
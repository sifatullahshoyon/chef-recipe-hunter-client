import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../utilities/firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user , setUser] = useState();

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    };

    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth , email);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth ,  (loggedUser) => {
            console.log('logged in user inside auth state observer' , loggedUser);
            setUser(loggedUser);
        });

        return () => {
            unSubscriber();
        };

    } , []);

    const authInfo = {
        user,
        createUser,
        signIn,
        resetPassword,
        logOut 
    };
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProviders;
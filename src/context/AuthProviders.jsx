import React, { createContext, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
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

    const authInfo = {
        user,
        createUser,
        signIn,
        resetPassword 
    };
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProviders;
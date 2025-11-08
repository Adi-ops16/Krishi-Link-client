import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.config';

const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [userLoading, setUserLoading] = useState(true)
    const [user, setUser] = useState(null)

    // google sign up
    const googleSignUp = () => {
        setUserLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createNewUser = (email, password) => {
        setUserLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in prev user
    const signInUser = (email, password) => {
        setUserLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setUserLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // logout
    const logout = () => {
        return signOut(auth)
    }

    const userInfo = {
        user,
        setUser,
        userLoading,
        setUserLoading,
        googleSignUp,
        createNewUser,
        signInUser,
        logout
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;
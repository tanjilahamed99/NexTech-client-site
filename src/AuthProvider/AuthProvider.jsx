import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import UseAxiosPublic from '../Hooks/AxiosPublic/UseAxiosPublic';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const axiosPublic = UseAxiosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axiosPublic.post('/jwt', { email: currentUser?.email })
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem('token')
            }
        })
        return () => {
            unSubscribe()
        }
    }, [axiosPublic])

    const authData = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
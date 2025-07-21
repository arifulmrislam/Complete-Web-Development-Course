import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged, signOut,
  signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { useEffect, createContext, useState } from 'react';
import {auth} from '../firebase.init';


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const  [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const name = 'Waiting for good news';

    const createUser= (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
        }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current User', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe();
    },[])

    const authInfo = {
            name,
            user,
            loading,
            createUser,
            signInUser,
            signOutUser,
            signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a value with something (authInfo)
 * 4. [attention please!!!!]
 * 5. use the authProvider in the main.jsx
 * 6. access the children inside the auth provider in the main.jsx
 * 7. export AuthContext
 */
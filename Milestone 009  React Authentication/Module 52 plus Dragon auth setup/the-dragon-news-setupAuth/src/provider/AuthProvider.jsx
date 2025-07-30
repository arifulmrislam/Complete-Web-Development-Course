import { createContext, useState, useEffect } from 'react';
import app from '../firebase/firebase.config.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        signInUser,
        logOut,
    };

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe()
        }
    },[])

    return (  
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;
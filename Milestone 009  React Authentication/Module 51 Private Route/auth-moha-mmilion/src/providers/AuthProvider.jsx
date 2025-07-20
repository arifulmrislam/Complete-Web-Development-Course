import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged, signOut
} from 'firebase/auth';
import { useEffect, createContext, useState } from 'react';
import {auth} from '../firebase.init';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const  [user, setUser] = useState('');
    console.log(user);

    const name = 'Waiting for good news';

    const createUser= (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current User', currentUser);
            setUser(currentUser);
        })

        return unSubscribe;
    },[])

    const authInfo = {
            name,
            user,
            createUser,
            signInUser,
            signOutUser,
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
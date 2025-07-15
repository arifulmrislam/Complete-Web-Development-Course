import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from '../../Firebase/firebase.init';

const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log(auth, provider);
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        })
        .catch(error => {
            console.log('Error', error);
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-primary mt-3'>Login with Google</button>
        </div>
    );
};

export default Login;
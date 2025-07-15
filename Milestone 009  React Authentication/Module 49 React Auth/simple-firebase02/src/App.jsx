import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase/firebase.init.js'
import './App.css';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => console.log('Error', error));
    }

    return (
      <>
        <h1 className='text-3xl mb-4'>Simple Firebase02</h1>
        <button onClick={handleGoogleSignIn} className='btn btn-primary'>Login With Google</button>
        {
            user && <div>
                <h3>user: {user.displayName}</h3>
                <p>Email: {user.email}</p>
            </div>
        }
      </>
    );
}

export default App

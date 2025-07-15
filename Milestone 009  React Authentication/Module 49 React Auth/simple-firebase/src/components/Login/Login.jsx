import {
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    signOut,
} from 'firebase/auth';
import { useState } from 'react';
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        // console.log(auth, googleProvider);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('Error', error);
                setUser(null);
            })
        }
        const handleGithubSignIn = () => {
            signInWithPopup(auth, githubProvider)
                .then(result => {
                    console.log(result.user);
                    setUser(result.user);
                })
                .catch(error => console.log('Error', error));
        }

    const handleGoogleSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign-our-successful');
        })
            .catch(error => {
                console.log('an error happened');
            })
    }


    return (
        <div>
            {user ? (
                <button
                    onClick={handleGoogleSignOut}
                    className='btn btn-primary mt-3'
                >
                    Sign Out
                </button>
            ) : (
                <>
                    <button
                        onClick={handleGoogleSignIn}
                        className='btn btn-primary mt-3 mr-2'
                    >
                        Login with Google
                    </button>
                    <button
                        onClick={handleGithubSignIn}
                        className='btn btn-primary mt-3'
                    >
                        Login with GitHub
                    </button>
                </>
            )}
        </div>
    );
};

export default Login;
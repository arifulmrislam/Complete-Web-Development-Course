import {
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [logInError, setLogInError] = useState(false);
    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //reset status
        setSuccess(false);
        setLogInError(false);

        // login user
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);

                if (!result.user.emailVerified) {
                    setLogInError('Please verify your emil address.');
                } else {
                    setSuccess(true);
                }
            })
            .catch((error) => {
                console.log('Error', error.message);
                setLogInError(error.message);
            });
    };

    const handleForgetPassword = () => {
        console.log('get me email address', emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            console.log('Please provide a valid email')
        } else{

            sendPasswordResetEmail(auth, email)
            .then(() => { 
                alert('Reset email sent, please check your email.')
            });
        }
    };

    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-5xl font-bold'>Login now!</h1>
                    <p className='py-6'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                </div>
                <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
                    <div className='card-body'>
                        <form onSubmit={handleLogin} className='form-control'>
                            <label className='label'>Email</label>
                            <input
                                type='email'
                                name='email'
                                ref={emailRef}
                                className='input input-bordered'
                                placeholder='Email'
                                required
                            />
                            <label className='label'>Password</label>
                            <input
                                type='password'
                                name='password'
                                className='input input-bordered'
                                placeholder='Password'
                                required
                            />
                            <div onClick={handleForgetPassword}>
                                <a className='link link-hover'>Forgot password?</a>
                            </div>
                            <button type='submit' className='btn btn-neutral mt-4'>
                                Login
                            </button>
                        </form>
                        {success && (
                            <p className='text-green-500'>User login successful.</p>
                        )}
                        {logInError && <p className='text-red-500'>{logInError}</p>}

                        <p>
                            New to this website? please.{' '}
                            <Link to='/signup'>
                                <button className='btn btn-neutral ml-2 p-2'>Sign Up</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

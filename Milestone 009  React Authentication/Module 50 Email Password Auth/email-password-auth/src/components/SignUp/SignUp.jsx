import React from 'react';
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase.init';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    // console.log(error);

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const url = event.target.photo.value;
        const terms = event.target.terms.checked;
        console.log(email, password, name, url, terms);

        // reset error message
        setError('');
        setSuccess(false);

        if (!terms) {
            setError('Please accept our conditions');
            return;
        }

        if (password.length < 6) {
            setError('Password should be 6 characters or longer.');
            return;
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/;

        if (!passwordRegex.test(password)) {
            setError('Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number,Min 8 characters,Max 30 characters.');
            return;
        }


        // create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true);

                // send verification email address
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log("Verification email sent");
                })
                .catch(err => {
                    console.log('Verification email error:', err.message);
                })

                //update profile name and photo url
                const profile = {
                    displayName : name,
                    photoURL : url
                }
                updateProfile(auth.currentUser, profile)
                .then( () => {
                    console.log('user profile updated')
                })
                .catch(error => {
                    console.log('User profile update error.');
                })

            })
            .catch((err) => {
                setError(err.message);
                setSuccess(false);
            })
    }

    return (
        <div className='card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-xl'>
            <div className='card-body'>
                <h1 className='text-5xl font-bold'>Sign Up now!</h1>
                <form onSubmit={handleSignUp} className='fieldset'>
                    <label className='label'>Name</label>
                    <input
                        type='text'
                        name='name'
                        className='input'
                        placeholder='User Name'
                    />
                    <label className='label'>Photo URL</label>
                    <input
                        type='text'
                        name='photo'
                        className='input'
                        placeholder='photo url'
                    />
                    <label className='label'>Email</label>
                    <input
                        type='email'
                        name='email'
                        className='input'
                        placeholder='Email'
                    />
                    <div className='relative'>
                        <label className='label'>Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            className='input'
                            placeholder='Password'
                        />
                        
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-6 top-6'
                        >
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </button>
                    </div>

                    <div>
                        <a className='link link-hover'>Forgot password?</a>
                    </div>
                    <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-80 border p-2'>
                        <label className='label'>
                            <input type='checkbox' name='terms' className='checkbox' />
                            Accept Our Terms And Conditions
                        </label>
                    </fieldset>
                    <button className='btn btn-neutral mt-4'>Sign Up</button>
                </form>
                {error && <p className='text-red-500'>{error}</p>}
                {success && <p className='text-green-700'>Sign up is Successful.</p>}

                <p>
                    Already have an account. Please login{' '}
                    <Link to='/login'>
                        <button className='btn btn-neutral ml-2 p-2'>Sign Up</button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
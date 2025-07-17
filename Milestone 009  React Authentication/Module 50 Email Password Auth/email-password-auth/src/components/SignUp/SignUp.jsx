import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const SignUp = () => {

    const handleSignUp =(event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);

        // create user with email and password

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch((err) => {
            console.log('Error', err);
        })
    }

    return (
        <div className='card bg-base-100 mx-auto my-10 w-full max-w-sm shrink-0 shadow-xl'>
            <div className='card-body'>
                <h1 className='text-5xl font-bold'>Sign Up now!</h1>
                <form onSubmit={handleSignUp} className='fieldset'>
                    <label className='label'>Email</label>
                    <input type='email' name='email' className='input' placeholder='Email' />
                    <label className='label'>Password</label>
                    <input
                        type='password'
                        name='password'
                        className='input'
                        placeholder='Password'
                    />
                    <div>
                        <a className='link link-hover'>Forgot password?</a>
                    </div>
                    <button className='btn btn-neutral mt-4'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
import React from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase.init';

const InputField = ({ type, placeholder, icon, ...rest }) => (
    <label className='input flex items-center gap-2 border rounded-md px-4 py-2 shadow-sm bg-white focus-within:ring-2 ring-blue-400 transition'>
        <span className='text-gray-600'>{icon}</span>
        <input
            type={type}
            placeholder={placeholder}
            className='flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-400'
            required
            {...rest}
        />
    </label>
);

const handleRegister = (event) =>{
    event.preventDefault();
    // console.log(event.target.search.value);
    const email = event.target.email.value;
    // console.log(event.target.username.value);
    const password = event.target.password.value;

    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        console.log(result.user);
    })
    .catch((error) => {
        console.log('Error', error);
    })
}

const Register = () => {
    return (
        <div className='min-h-[710px] flex items-center justify-center p-4 rounded-md'>
            <form onSubmit={handleRegister} className='bg-base-200 shadow-lg p-6 rounded-md space-y-4 w-full max-w-md'>
                <h2 className='text-2xl font-semibold text-center'>Register</h2>

                <InputField
                    type='search'
                    name='search'
                    placeholder='Search'
                    icon={
                        <svg
                            className='w-5 h-5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <circle cx='11' cy='11' r='8' />
                            <line x1='21' y1='21' x2='16.65' y2='16.65' />
                        </svg>
                    }
                />

                <InputField
                    type='email'
                    name='email'
                    placeholder='mail@site.com'
                    icon={
                        <svg
                            className='w-5 h-5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <rect x='2' y='4' width='20' height='16' rx='2' />
                            <path d='M22 7 12 13 2 7' />
                        </svg>
                    }
                />

                <InputField
                    type='text'
                    name='username'
                    placeholder='Username'
                    minLength='3'
                    maxLength='30'
                    pattern='[A-Za-z][A-Za-z0-9\-]*'
                    title='Only letters, numbers, or dash'
                    icon={
                        <svg
                            className='w-5 h-5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <circle cx='12' cy='7' r='4' />
                            <path d='M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2' />
                        </svg>
                    }
                />
                <p className='text-sm text-gray-500'>
                    Username must be 3–30 characters with only letters, numbers or dashes.
                </p>

                <InputField
                    type='password'
                    name='password'
                    placeholder='Password'
                    minLength='8'
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    title='Must be more than 8 characters, including number, lowercase, uppercase'
                    icon={
                        <svg
                            className='w-5 h-5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path d='M12 17v-4M5.5 12a6.5 6.5 0 0113 0v4.5a2.5 2.5 0 01-5 0V13a1.5 1.5 0 00-3 0v4.5a2.5 2.5 0 01-5 0V12z' />
                        </svg>
                    }
                />
                <p className='text-sm text-gray-500'>
                    Must be 8+ characters including a number, lowercase, and uppercase.
                </p>
                <button type="submit" className='btn btn-accent w-[80%] my-3'>Sign in</button>
            </form>
        </div>
    );
};

export default Register;

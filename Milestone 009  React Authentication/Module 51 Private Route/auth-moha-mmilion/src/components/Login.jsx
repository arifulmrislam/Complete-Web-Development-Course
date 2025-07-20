import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        signInUser(email, password)
        .then(result => {
            console.log('Signed in user:', result.user);
        })
        .catch((err) => {
            console.log('Error', err.message);
        })
    }

    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content flex-col'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-3xl font-bold'>Login now!</h1>
                </div>
                <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
                    <form onSubmit={handleLogin} className='card-body'>
                        <fieldset className='fieldset'>
                            <label className='label'>Email</label>
                            <input 
                            type='email' 
                            name='email'
                            className='input' 
                            placeholder='Email' />
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
                            <button type='submit' className='btn btn-primary mt-4'>Login</button>
                        </fieldset>
                    </form>
                    <p className='ml-4 mb-4'>
                        New to this website!! Please
                        <Link to='/register'><button className='btn btn-primary m-4'>Register</button></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
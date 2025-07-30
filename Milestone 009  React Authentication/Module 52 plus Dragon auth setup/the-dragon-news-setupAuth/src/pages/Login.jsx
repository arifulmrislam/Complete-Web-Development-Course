import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(result => {
            e.target.reset();
        })
        .catch((error) => {
            console.log('Error', error.message);
            alert(error.code);
        })
    }

    return (
        <div className='hero bg-white min-h-screen'>
            <div className='hero-content flex-col'>
                <div className='text-center lg:text-centre'>
                    <h1 className='text-3xl font-bold'>Login your account!</h1>
                </div>
                <div className='card w-full max-w-sm shrink-0 shadow-2xl'>
                    <form onSubmit={handleSubmit} className='card-body'>
                        <fieldset className='fieldset'>
                            <label className='label'>Email</label>
                            <input
                                name='email'
                                type='email'
                                className='input bg-white border border-blue-500 p-4'
                                placeholder='Email'
                            />
                            <label className='label'>Password</label>
                            <input
                                name='password'
                                type='password'
                                className='input bg-white border border-blue-500 p-4'
                                placeholder='Password'
                            />
                            <div>
                                <a className='link link-hover'>Forgot password?</a>
                            </div>
                            <button type='submit' className='btn btn-primary mt-4'>
                                Login
                            </button>
                        </fieldset>
                    </form>
                    <p className='ml-4 mb-4'>
                        New to this website!! Please
                        <Link to='/auth/register'>
                            <button className='btn btn-primary m-4 text-red-700'>Register</button>
                        </Link>
                    </p>
                    <button onClick={''} className='btn btn-ghost m-4'>
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
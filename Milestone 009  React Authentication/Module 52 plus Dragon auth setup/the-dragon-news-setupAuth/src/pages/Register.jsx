import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        //get form data
        const form = new FormData(e.target);
        const name = form.get('name');
        // const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // const name = form.get('name');
        console.log({name,email,password});

        createNewUser(email, password)
        .then(result => {
            const user = result.user
            setUser(user);
            console.log(user);
        }).catch((err) => {
            const error = err.message;
            console.log(error);
        })
    }

    return (
        <div className='hero bg-white min-h-screen'>
            <div className='hero-content flex-col'>
                <div className='text-center lg:text-centre'>
                    <h1 className='text-3xl font-bold'>Register your account!</h1>
                </div>
                <div className='card w-full max-w-sm shrink-0 shadow-2xl'>
                    <form onSubmit={handleSubmit} className='card-body'>
                        <fieldset className='fieldset'>
                            <label className='label'>Your Name</label>
                            <input
                                name='name'
                                type='text'
                                className='input bg-white border border-blue-500 p-4'
                                placeholder='Enter your name'
                            />
                            <label className='label'>Photo URL</label>
                            <input
                                name='photo'
                                type='photo-url'
                                className='input bg-white border border-blue-500 p-4'
                                placeholder='Enter url'
                            />
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
                            <fieldset className='fieldset bg-white'>
                                <label className='label cursor-pointer space-x-2'>
                                    <input
                                        type='checkbox'
                                        name='terms'
                                        className='checkbox checkbox-primary'
                                    />
                                    <span className='text-base text-gray-800'>
                                        Accept Our Terms & Conditions
                                    </span>
                                </label>
                            </fieldset>
                            <button type='submit' className='btn btn-primary mt-4'>
                                Register
                            </button>
                        </fieldset>
                        <p>
                            Already have an account.{' '}
                            <Link to='/auth/login'>
                                <button className='btn btn-primary ml-2 p-2 text-red-700'>
                                    Log in
                                </button>
                            </Link>
                        </p>
                    </form>

                    {/* <button onClick={''} className='btn btn-ghost m-4'>
            Google
            </button> */}
                </div>
            </div>
        </div>
    );
};

export default Register;

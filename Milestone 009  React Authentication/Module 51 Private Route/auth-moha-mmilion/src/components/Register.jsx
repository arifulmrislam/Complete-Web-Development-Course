import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email, password);
    }

    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content flex-col'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-3xl font-bold'>Register now!</h1>
                </div>
                <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
                    <form onSubmit={handleRegister} className='card-body'>
                        <fieldset className='fieldset'>
                            <label className='label'>Name</label>
                            <input
                                type='text'
                                name='name'
                                className='input'
                                placeholder='Name'
                            />
                            <label className='label'>Email</label>
                            <input
                                type='email'
                                name='email'
                                className='input'
                                placeholder='Email'
                            />
                            <label className='label'>Password</label>
                            <input
                                type='password'
                                name='password'
                                className='input'
                                placeholder='Password'
                            />
                            <button type='submit' className='btn btn-primary mt-4'>
                                Register
                            </button>
                        </fieldset>
                    </form>
                    <p className='ml-4 mb-4'>
                        If you have an account!! Please
                        <Link to='/login'>
                            <button className='btn btn-primary m-4'>Login</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
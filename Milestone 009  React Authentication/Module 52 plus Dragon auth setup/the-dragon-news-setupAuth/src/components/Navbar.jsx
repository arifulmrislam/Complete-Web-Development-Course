import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
import {React, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='login'>
                <div className='flex gap-3'>
                    <img src={userIcon} alt='' />
                    {
                        user && user?.email ?(
                            <button onClick={logOut} className='btn btn-neutral rounded-none'>Log-out</button>
                        ) : (<Link to="auth/login" className='btn btn-neutral rounded'>Login</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
import {React, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.name}</div>
            <div className='nav space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='login'>
                <div className='flex gap-3'>
                    <img src={userIcon} alt='' />
                    <Link to="auth/login" className='btn btn-neutral rounded'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
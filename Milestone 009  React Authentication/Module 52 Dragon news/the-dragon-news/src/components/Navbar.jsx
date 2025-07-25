import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='nav space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='login'>
                <div className='flex gap-3'>
                    <img src={userIcon} alt='' />
                    <button className='btn btn-neutral rounded'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
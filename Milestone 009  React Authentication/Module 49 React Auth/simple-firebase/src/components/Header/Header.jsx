import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/' className='mr-5'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;
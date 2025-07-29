import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='font-poppins'>
            <header className='py-3 w-11/12 mx-auto'/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;
import Link from "../components/Link/Link";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        {id: 1, path: '/', name: 'Home'},
        {id: 2, path: '/about', name: 'About'},
        {id: 3, path: '/services', name: 'Services'},
        {id: 4, path: '/contact', name: 'Contact'},
        {id: 5, path: '*', name: 'NotFound'},
    ]
    return (
        <nav className='text-black p-6 bg-yellow-200'>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose /> : <IoMenuOutline className='text-2xl' />
                }
            
            </div>
            <ul className={
                `md:flex absolute duration-1000 md:static
            ${open ? 'top-16': '-top-80'}
            bg-yellow-200 px-6 
            `
            }>
            {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;
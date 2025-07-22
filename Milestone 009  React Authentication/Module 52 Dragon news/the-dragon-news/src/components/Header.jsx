import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    const currentDate = moment().format('dddd, MMMM Do YYYY');

    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className='logo'>
                <img className='w-[300px]' src={logo} alt=''/>
            </div>
            <h2 className='text-gray-400'>Journalism without Fear or Favour</h2>
            <p>{currentDate}</p>
        </div>
    );
};

export default Header;
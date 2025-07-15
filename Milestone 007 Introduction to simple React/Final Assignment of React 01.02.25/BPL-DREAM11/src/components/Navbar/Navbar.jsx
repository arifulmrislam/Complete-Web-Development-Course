import logo from '../../assets/logo.png';
import icon from '../../assets/dollar.png';
import PropTypes from 'prop-types';

const Navbar = ({coins}) => {
    return (
        <header className='flex justify-between items-center max-w-7xl mx-auto p-4'>
            <img src={logo} alt="" />
            <div className='flex justify-center items-center gap-6 cursor-pointer'>
                <h2><a href="#"></a>Home</h2>
                <h2><a href="#"></a>Fixture</h2>
                <h2><a href="#"></a>Teams</h2>
                <h2><a href="#"></a>Schedule</h2>
                <button className="flex items-center gap-2 px-6 py-2 rounded-lg
                border-1 border-gray-200 font-bold text-black hover:border-blue-400">
                    <p>{coins} Coin</p>
                    <img className='w-6 h-6' src={icon} alt="Button Icon"/> 
                </button>
            </div>
        </header>
    );
};

Navbar.propTypes = {
    coins: PropTypes.number.isRequired,
};

export default Navbar;
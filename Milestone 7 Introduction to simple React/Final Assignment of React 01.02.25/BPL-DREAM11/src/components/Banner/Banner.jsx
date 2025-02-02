import banner from '../../assets/banner-main.png';
import background from '../../assets/bg-shadow.png';
import PropTypes from 'prop-types';

const Banner = ({handleAddToCoin}) => {
    return (
        <div
            className='relative flex flex-col items-center h-[500px] max-w-7xl mx-auto bg-no-repeat bg-cover bg-center rounded-2xl py-10'
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-radial-[at_100%_100%] from-black to-zinc-900 to-75% opacity-50 rounded-2xl'></div>

            <div className='relative z-10 text-center space-y-6'>
                <img
                    src={banner}
                    alt='Banner'
                    className='w-[200px] md:w-[300px] mx-auto'
                />
                <h1 className='text-3xl font-bold text-white'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className='text-lg font-semibold text-gray-300'>
                    Beyond Boundaries Beyond Limits
                </p>
                <button onClick={()=> handleAddToCoin(600000)} className='px-6 py-3 bg-[#E7FE29] text-black font-semibold rounded-lg cursor-pointer border-1 hover:bg-yellow-100'>
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleAddToCoin: PropTypes.func.isRequired,

};

export default Banner;

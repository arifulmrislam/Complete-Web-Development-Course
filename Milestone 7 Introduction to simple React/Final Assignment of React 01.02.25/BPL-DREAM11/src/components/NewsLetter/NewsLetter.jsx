import background from '../../assets/bg-shadow.png';
import PropTypes from 'prop-types';

const NewsLetter = () => {
    return (
        <div
            className='border border-gray-300 mt-24 mb-24 relative flex flex-col items-center h-[250px] max-w-4xl mx-auto bg-no-repeat bg-cover bg-center rounded-2xl py-10'
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Gradient Overlay */}
            <div className='absolute inset-0 opacity-50 rounded-2xl'></div>

            <div className='relative z-10 text-center space-y-6'>
                <h1 className='text-3xl font-bold text-black'>
                    Subscribe to our Newsletter
                </h1>
                <p className='text-lg font-semibold text-gray-600'>
                    Get the latest updates and news right in your inbox!
                </p>
                <div className='flex gap-2'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button className='px-6 py-3 bg-[#E7FE29] text-black font-semibold rounded-lg cursor-pointer hover:bg-yellow-100'>
                        Subscribe
                    </button>
                </div>

            </div>
        </div>
    );
};

NewsLetter.propTypes = {
    handleAddToCoin: PropTypes.func.isRequired,

};

export default NewsLetter;
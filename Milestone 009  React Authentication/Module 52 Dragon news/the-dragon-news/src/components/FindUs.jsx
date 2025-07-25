import { FaFacebookF } from 'react-icons/fa6';
import { BsTwitterX, BsInstagram } from 'react-icons/bs';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mt-4 mb-4'>Find Us On</h2>
            <div className='flex flex-col'>
                <button className='btn bg-white text-base-300 border-[#e5e5e5] flex justify-start items-center p-6 hover:bg-gray-100'>
                    <FaFacebookF className='text-blue-600 mr-3 w-5 h-5' />
                    Facebook
                </button>
                <button className='btn bg-white text-base-300 border-[#e5e5e5] flex justify-start items-center p-6 hover:bg-gray-100'>
                    <BsTwitterX className='mr-3 w-5 h-5' />
                    Twitter
                </button>
                <button className='btn bg-white text-base-300 border-[#e5e5e5] flex justify-start items-center p-6 hover:bg-gray-100'>
                    <BsInstagram className='text-red-600 mr-3 w-5 h-5' />
                    Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;

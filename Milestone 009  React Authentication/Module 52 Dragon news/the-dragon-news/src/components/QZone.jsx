import swimming from '../assets/swimming.png'
import Class from '../assets/class.png'
import playground from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-gray-100 mt-6'>
            <h2 className='font-semibold mt-4 mb-4'>Q-Zone</h2>
            <img className='m-4' src={Class} alt="" />
            <img className='m-4' src={swimming} alt="" />
            <img className='m-4' src={playground} alt="" />
        </div>
    );
};

export default QZone;
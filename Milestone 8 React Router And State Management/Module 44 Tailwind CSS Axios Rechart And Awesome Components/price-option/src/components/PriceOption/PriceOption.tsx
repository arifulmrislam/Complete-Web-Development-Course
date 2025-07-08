import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option;

    return (
        <div className='bg-blue-500 rounded-md p-4 flex flex-col'>
            <h2 className="text-center mb-4">
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center mb-4'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map(feature => <Feature feature={feature}></Feature>)
            }
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300">
                Buy Now
            </button>

        </div>
    );
};

export default PriceOption;
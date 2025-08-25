

const CoffeeCard = ({coffee}) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee
    return (
        <div className="card card-side bg-base-100 shadow-md p-10 ">
            <figure>
                <img className='w-30 h-30'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full pr-4">
                <div className='ml-4'>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions flex flex-col justify-center space-y-3">
                    <button className="btn">View</button>
                    <button className="btn">Edit</button>
                    <button className="btn">X</button>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;
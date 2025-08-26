import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee}) => {

    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

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
                <div className="card-actions flex flex-col justify-center space-y-3 w-3">
                    <button className="btn">View</button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn">Edit</button>
                    </Link>
                    <button
                    onClick={()=> handleDelete(_id)}
                    className="btn bg-orange-500">X</button>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;
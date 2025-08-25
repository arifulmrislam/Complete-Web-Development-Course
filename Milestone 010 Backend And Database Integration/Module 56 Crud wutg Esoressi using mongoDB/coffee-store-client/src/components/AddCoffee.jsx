import Swal from 'sweetalert2';


const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}

        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }

        })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-black text-3xl font-extrabold'>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-9 mb-4'>
                    <div>
                        <div className="join">
                            <div className="indicator">
                                <button className="btn join-item">Name</button>
                            </div>
                            <div>
                                <div>
                                    <input 
                                    type='text'
                                    name='name'
                                    className="input join-item"     placeholder="Coffee Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="join">
                            <div className="indicator">
                                <button className="btn join-item">Available Quantity</button>
                            </div>
                            <div>
                                <div>
                                    <input 
                                    type='text' 
                                    name='quantity'
                                    className="input join-item" placeholder="Available Quantity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* form supplier row */}
                <div className='md:flex gap-5 mb-4'>
                    <div>
                        <div className="join">
                            <div className="indicator">
                                <button className="btn join-item">Supplier</button>
                            </div>
                            <div>
                                <div>
                                    <input 
                                    type='text'
                                    name='supplier'
                                    className="input join-item"     placeholder="Supplier Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="join">
                            <div className="indicator">
                                <button className="btn join-item">Test</button>
                            </div>
                            <div>
                                <div>
                                    <input 
                                    type='text' 
                                    name='taste'
                                    className="input join-item" placeholder="Available Quantity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex gap-4'>
                    <div>
                        <div className="join">
                            <div className="indicator">
                                <button className="btn join-item">Category</button>
                            </div>
                            <div>
                                <div>
                                    <input 
                                    type='text'
                                    name='category'
                                    className="input join-item"     placeholder="coffee Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="join">
                            <div className="indicator">
                                <button className="btn join-item">Details</button>
                            </div>
                            <div>
                                <div>
                                    <input 
                                    type='text' 
                                    name='details'
                                    className="input join-item" placeholder="Available Quantity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* form photo url row */}
                <div className='md:flex gap-4 mt-4'>
                    <div>
                        <div className="join">
                            <div className="indicator">
                                <button className="btn join-item">Photo URL</button>
                            </div>
                            <div>
                                <div>
                                    <input 
                                    type='text'
                                    name='photo'
                                    className="input join-item"     placeholder="Photo URL" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <input className="btn btn-block mt-4" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser)
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email};

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('User updated successfully!!')
            }
        })
    }
    return (
        <div>
            <h3>Update information of { loadedUser.name }</h3>
            <form onSubmit={handleUpdate}>
                <input className='border-2 mt-3 rounded-md' type='text' name='name' defaultValue={loadedUser?.name} placeholder='Enter name' id='' />
                <br />
                <input className='border-2 mt-1 rounded-md' type='email' name='email' defaultValue={loadedUser?.email} placeholder='Enter email' id='' />
                <br />
                <input className='bg-gray-400 mt-2 p-2 rounded-lg' type='submit' value='Update' />
            </form>
        </div>
    );
};

export default Update;
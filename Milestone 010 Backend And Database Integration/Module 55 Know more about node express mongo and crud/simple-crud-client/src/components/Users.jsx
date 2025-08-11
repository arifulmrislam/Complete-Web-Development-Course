import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = _id => {
        console.log('Delete',_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount>0){
                alert('Deleted successfully!');
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <h2 className='text-2xl'>Total Users: {users.length}</h2>
            <div>
                {
                    users.map((user) => 
                    <p key={user._id}>
                        
                        UserName: {user.name}<br/>
                        UserEmail: {user.email}<br/>
                        ID: {user._id}
                    <button className='btn ml-2'
                        onClick={ ()=> handleDeleteUser(user._id)}
                    >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;
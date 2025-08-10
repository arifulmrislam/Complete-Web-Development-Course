import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2 className='text-2xl'>Total Users: {users.length}</h2>
            <div>
                {
                    users.map((user) => 
                    <p>UserName: {user.name}<br/>
                    UserEmail: {user.email}
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;
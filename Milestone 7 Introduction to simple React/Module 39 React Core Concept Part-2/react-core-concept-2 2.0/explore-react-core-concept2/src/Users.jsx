
import { useState, useEffect } from 'react';
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]);

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    );
};

export default Users;
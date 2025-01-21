import { useState, useEffect } from 'react';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(function () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]);

    return ( 
        <div>
            <h3>Users:{users.length}</h3>
            <h3>Users:{users.name}</h3>
            <h3>Users:{users.length}</h3>
            <h3>Users:{users.length}</h3>
        </div>
    )
}
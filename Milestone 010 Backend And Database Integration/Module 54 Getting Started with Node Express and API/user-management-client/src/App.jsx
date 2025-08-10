import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleAddUser = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };

        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('inside post response', data)
        })
    }

    return (
        <>
            <h1>Users Management Client</h1>
            <h3>Users: {users.length}</h3>

            <form onSubmit={handleAddUser}>
                <input type='name' name='name' id=''></input>
                <br />
                <input type='email' name='email' id=''></input>
                <br />
                <input type="submit" value="Add User" />
            </form>

            <div>
                {
                    users.map(user => <p key={user.id}>{user.id}. {user.name}. {user.email}</p>)
                }
            </div>
        </>
    );
}

export default App;

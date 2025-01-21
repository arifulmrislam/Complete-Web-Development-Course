import './Friends.css';
import { useState, useEffect } from 'react';
import Friend from './friend';

export default function Friends(){
    const [friends, setFriend] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data))
    },[]);

    return ( 
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
            friends.map(friend => 
                <Friend friend={friend}></Friend>
            )
        }
        </div>

    )
}

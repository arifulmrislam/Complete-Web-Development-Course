
import { useEffect, useState } from 'react';
import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data));
    },[]);

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            <div className="grid grid-cols-2 gap-4">
                {friends.map(friend => 
                    <Friend key={friend.id} friend={friend}></Friend>
                )}
            </div>
        </div>
    );
};

export default Friends;
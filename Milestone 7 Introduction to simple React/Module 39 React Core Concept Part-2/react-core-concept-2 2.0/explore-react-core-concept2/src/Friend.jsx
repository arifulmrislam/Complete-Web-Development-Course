import {useState} from 'react';

export default function Friend({friend}) {
    const {name, email, city} = friend;
    return (
        <div className="box">
            <h4>Name:{friend.name}</h4>
            <p>Email:{friend.email}</p>
            <p>City:{friend.address.city}</p>
        </div>
    );
} 
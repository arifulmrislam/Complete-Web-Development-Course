
import { useState } from 'react';

const Team = () => {
    const [count, setCount] = useState(11);

    const handleAdd = () => {
        const newTeam = count + 1;
        setCount(newTeam);
    }

    const handleRemove = () => {
        // let newTeam;
        if(count > 0){
            setCount(count -1);
        } else{
            setCount(count);
        }
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {count}</h3>
            <button className='text-red-700' onClick={handleAdd}>Add</button>
            <button className='text-blue-700'onClick={handleRemove}>Subtraction</button>
        </div>
    );
};

export default Team;
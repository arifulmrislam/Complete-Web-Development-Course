import './counter.css'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <h3>Counter: {count}</h3>
            <button className='btn' onClick={() => setCount(count+1)}>Increase</button>
            <button className='btn' onClick={() => setCount(count > 0 ? count-1 : count )}>Decrease</button>
        </div>
    );
};

export default Counter;
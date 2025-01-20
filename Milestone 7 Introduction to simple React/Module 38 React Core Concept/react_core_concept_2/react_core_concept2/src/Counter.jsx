import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return ( 
        <div style={{border:'2px solid pink', 
                    borderRadius: '20px',
                    padding: '15px',
                    marginBottom: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick = {handleAdd}>+1</button>
            <button onClick = {handleReduce}>-1</button>
            <p>The final counter app</p>
        </div>
    )
}
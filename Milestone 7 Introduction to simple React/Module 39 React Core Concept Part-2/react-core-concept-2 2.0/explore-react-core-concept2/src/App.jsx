import {useState} from 'react';
import './App.css'
import Counter from './Counter'
import Events from './Events';
import Team from './Team'
import Users from './Users';
import Friends from './Friends';

function App() {
    const [count, setCount] = useState(0);
    const handleReduce = () => {
        const newCount = count -1;
        setCount(newCount);
    }

    function handleClick() {
        alert('You Clicked Me!');
    }
    
    return (
        <>
            <h3>React core concept</h3>
            <Events></Events>
            <Counter></Counter>
            <Team></Team>
            <button onClick={handleReduce}>Click Me</button>
            <button onClick={() => {alert('button clicked')}}>Click Me</button>
            <button onClick={()=> addToFive(3)}>third</button>
            <button onClick={handleClick}>Handle Me</button>
            <Users></Users>
            <Friends></Friends>
        </>
    )
}

export default App

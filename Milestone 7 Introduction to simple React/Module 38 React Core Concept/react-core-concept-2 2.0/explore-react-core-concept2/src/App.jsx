import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'

function App() {
    const handleReduce = () => {
        const newCount = count -1;
        setCount(newCount);
    }
    
    return (
        <>
            <h3>React core concept</h3>
            <Team></Team>
            <button onClick={handleReduce}>Click Me</button>
            <button onClick={() => {alert('button clicked')}}>Click Me</button>
            <button onClick={()=> addToFive(3)}>third</button>
        </>
    )
}

export default App

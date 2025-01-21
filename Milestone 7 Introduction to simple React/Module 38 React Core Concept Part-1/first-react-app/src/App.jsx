import { useState } from 'react'
import reactLogo from './assets/react.svg'
import arif from './assets/Edited.jpg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    return (
        <>
            <div>
                <a href="" target="_blank">
                    <img src={arif} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Hello Everyone</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <div className="card">
                <button onClick={() => setNumber((number) => number + 1)}>
                    Number is {number}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Person></Person>
            <Student></Student>
        </>
    )
}

function Person() {
    const person = {name: 'Mr.Jon', age:20};
    return (
        <>
        <p className="read-the-docs">I am {person.name} and {person.age} years old.</p>
        <p className="read-the-docs">I am {person.name} and {person.age} years old.</p>
        <p className="read-the-docs">I am {person.name} and {person.age} years old.</p>
        <p className="read-the-docs">I am {person.name} and {person.age} years old.</p>
    </>
    )
}

function Student() {
    const student = {name:"Him", age:12};
    return <p className='read-the-docs'>I am {student.name} and {student.age} years old.</p>;
}
export default App

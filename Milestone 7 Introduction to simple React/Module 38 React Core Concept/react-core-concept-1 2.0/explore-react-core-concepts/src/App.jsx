import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer  from './Singer';
import BookStore from './BookStore';

function App() {
    const bookStore = [
        { id: 1, name: 'math', price: 120 },
        { id: 2, name: 'Chemistry', price: 150 },
        { id: 3, name: 'Physics', price: 100 },
        { id: 4, name: 'Biology', price: 200 },
    ];

    return (
        <>
            <h1>Vite + React</h1>
            <Person name="jamal" age="20"></Person>
            <Developer></Developer>
            <h2>Book Store</h2>
            <BookStore books={bookStore}></BookStore>
        </>
    )
}

function Developer() {
    const acotrs = ['sakib', 'shorif', 'kalam'];
    const singers = [
        {Name: 'Mahfuzur Rahman', age:36},
        {Name: 'namncy', age: 32},
        {Name: 'Andruw', age: 51}
    ];
    const developerStyle = {
        margin: '20px',
        padding: '20px',
        border: '2px solid purple',
        borderRadius: '20px'
    }
    return (
        <div style={developerStyle}>
            <h2>I am a developer.</h2>
            <Todo task="Do problem solving" isDone={true}></Todo>
            <Todo task="Have fun with Discord" isDone={false}></Todo>
            <Todo task="Make something for all" isDone={true}></Todo>
            <Actor name="Bappa Raz"></Actor>
            {
            acotrs.map(actor =><Actor name={actor}></Actor> )
            }
            {
            singers.map(singer =><Singer singer={singer}></Singer>)
            }
        </div>
        
    )
}
function Person({name='Arif', age=1}) {
    // const age = 25;
    const money = 20;
    const person = {name: 'Arif', age:12};
    return (
        <>
        <h3 className="person">Hello, My name is {name} and {age} years old.<br/> I am {age - person.age} years younger than my sister.<br/> I have {money} taka for my lunch.</h3>
        </>
    )
}



export default App

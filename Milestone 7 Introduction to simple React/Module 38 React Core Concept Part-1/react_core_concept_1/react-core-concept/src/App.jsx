import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel','Salman Shah', 'Saimon'];

  const books = [
    {id:1, name: 'Physics', price: 100},
    {id:2, name: 'Math', price: 120},
    {id:3, name: 'Chemistry', price: 200},
    {id:4, name: 'Biology', price: 300},
  ]


  const singers = [
    {id:1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id:2, name: 'Eva Rahman', age: 30},
    {id:3, name: 'Subrata', age: 48},
    {id:4, name: 'Pritom', age: 28}
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      
      <Actor name={"Bappa Raj"}></Actor>  
      {
      actors.map((actor) => (
        <Actor name={actor}></Actor>))
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn Angular" isDone={false}></Todo>
      <Todo task="Learn TypeScript" isDone={false}></Todo> */}
      {/* <Device name='Laptop' price='55000'></Device>
      <Device name='Mobile' price='17000'></Device>
      <Device name='Watch' price='7000'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade={8} score='100'></Student>
      <Student grade='9' score='97'></Student>
      <Student grade='10' score='98.5'></Student>
      <Developer></Developer> */}
    </>
  );
}
function Device(props){
  console.log(props);
  return (
    <h2>This device:{props.name} Price:{props.price}</h2>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {name: 'Rakib', age:20}
  return (
      <h3>I am {person.name} with age: {person.age}</h3>
  )
}

function Student({grade,score}){
  console.log(grade,score);
  return( 
  <div className='student'>
    <h3>This is a student.</h3>
    <p>Class:{grade}</p>
    <p>Score:{score}</p>
  </div>
)}

function Developer (){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  )
}
export default App

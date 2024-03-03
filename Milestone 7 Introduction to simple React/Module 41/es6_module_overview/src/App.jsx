import { useState } from 'react'
import './App.css'
import Watch from './Watch/Watch'
import { useEffect } from 'react';

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  },[])
  // const watches = [
  //   {id: 1, name: 'Apple watch', price: 200},
  //   {id: 2, name: 'Samsung watch', price: 250},
  //   {id: 3, name: 'MI watch', price: 300},
  // ]
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 7",
  //     price: 399,
  //   },
  //   {
  //     id: 2,
  //     name: "Galaxy Watch 4",
  //     price: 279.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Versa 3",
  //     price: 229.95,
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 2",
  //     price: 399.99,
  //   },
  //   {
  //     id: 5,
  //     name: "Huawei Watch GT 3",
  //     price: 199.99,
  //   },
  // ];
  return (
    <>
      <h3 style={{
        color: 'red',
        textDecoration: "underline"
      }}>Vite + React</h3>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App

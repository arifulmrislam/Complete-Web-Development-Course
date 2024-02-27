import './App.css'
import Counter from './Counter';

function App() {

  function handleClick1(){
    alert('button clicked 1');
  }
  const handleClick2 = () =>{
    alert('Button clicked 2')
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Counter></Counter>

      <button onClick={handleClick1}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={()=>{alert('Third Clicked')}}>Third</button>
      <button onClick={()=>addToFive(12)}>Four</button>
    </>
  )
}

export default App

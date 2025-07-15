import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav';
import LineChart from './components/LineChart/LChart';
import Phones from './components/Phones/Phones';
import PriceOption from './components/PriceOptions/PriceOptions';
import NavBar from './NavBar/NavBar';

function App() {


  return (
    <>
    <NavBar></NavBar>
    <DaisyNav></DaisyNav>
        <h1 className='text-2xl'>Vite + React</h1>
    <PriceOption></PriceOption>
    <LineChart></LineChart>
    <Phones></Phones>
    </>
  )
}

export default App

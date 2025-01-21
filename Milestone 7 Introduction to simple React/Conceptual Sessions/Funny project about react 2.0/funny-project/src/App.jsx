// import { useState } from 'react'
import Logo from './components/Logo'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar';
import Resources from './contexts/Resources';
import ReactComponents from './contexts/ReactComponents';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
        <div className='bg-[#21222c] text-cyan-50 flex items-center'>
            <div className='container mx-16 flex items-center py-2'>
                <Logo></Logo>
                <Navbar></Navbar>
            </div>
            <SearchBar></SearchBar>
        </div>
        <div className='container mx-16 flex py-2'>
            <div>
                <Resources></Resources>
            </div>
            <div className='bg-gray-100 p-6 rounded-md shadow-md w-full mt-16 ml-20'>
                <ReactComponents></ReactComponents>
            </div>
        </div>
        </>
    );
}

export default App;



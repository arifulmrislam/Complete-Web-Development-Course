import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

    function handleClick1 (){
        alert('button 1 clicked');
    }

    const handleClick2 = () => {
        alert('button 2 clicked');
    }

    const addToFive = (num) => {
        alert(num + 3);
    }

    const addToSix = (sum) => {
        alert(sum - 2);
    }
    
    return (
        <>
            <h3 className='mb-12 text-3xl text-blue-300 font-bold'>React core concept 2</h3>
            <Friends></Friends>
            <Users></Users>
            <Team></Team>
            <Counter></Counter>
            <button onClick={handleClick1}>Click me</button>
            <button onClick={handleClick2}>Click me</button>
            <button onClick= {() => {alert('third clicked')}}>third</button>
            <button onClick={() => addToFive(3)}>Four</button>
            <button onClick={() => addToSix(10)}>Five</button>
        </>
    )
}

export default App
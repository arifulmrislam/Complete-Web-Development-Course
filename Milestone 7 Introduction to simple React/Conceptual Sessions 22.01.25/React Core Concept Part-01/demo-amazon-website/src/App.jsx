import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [variable, setVariable] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleCount = () => {
        setCount(count + 1);
    };

    const handleVariable = () => {
        const sum = count + 1;
        setVariable(sum);
    };

    return (
        <>
            <h1>Main App JS</h1>

            <h1>StateCount: {count}</h1>
            <h1>VariableCount: {variable}</h1>

            <button onClick={handleCount}>Increase StateCount</button>
            <button onClick={handleVariable}>Increase VariableCount</button>

            <h1>Users:</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h2>Name: {user.name}</h2>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;

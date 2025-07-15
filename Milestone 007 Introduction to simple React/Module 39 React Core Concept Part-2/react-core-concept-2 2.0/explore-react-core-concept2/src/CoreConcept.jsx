import { useState } from 'react';
import Posts from './Posts';

const CoreConcept = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>React Core Concept Recap</h3>
            <ol>
                <li>1. Components</li>
                <li>2. JSX</li>
                <li>3. Props</li>
                <li>4. Event Handler</li>
                <li>5. state</li>
                <li>6. load data</li>
            </ol>
            <hr></hr>
            <Posts></Posts>
        </div>
    );
};

export default CoreConcept;
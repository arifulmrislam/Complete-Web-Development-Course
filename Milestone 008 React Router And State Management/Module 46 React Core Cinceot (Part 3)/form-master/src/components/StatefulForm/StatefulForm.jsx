import {useState} from 'react';

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be')
        }
        console.log(name,email,password)
    }

    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleEmailChange = e => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        e.preventDefault();
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleNameChange}
                type='text' name='name' />
                <br />
                <input
                    onChange={handleEmailChange}
                type='email' name='email' id=''/>
                <br />
                <input
                    onChange={handlePasswordChange}
                type='password' name='password' required />
                <br />
                <input type='submit' value='Submit' />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;

import { useState, useEffect } from 'react';

const RefForm = () => {

    const nameRef = useState(null);
    const emailRef = useState(null);
    const passwordRef = useState(null);

    useEffect(() => {
        nameRef.current.focus();
    },[])
    

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name='name'/>
                <br/>
                <input ref={emailRef} type='text' name='email' id=''/>
                <br/>
                <input ref={passwordRef}type='password' name='password' id=''/>
                <br/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    );
};

export default RefForm;
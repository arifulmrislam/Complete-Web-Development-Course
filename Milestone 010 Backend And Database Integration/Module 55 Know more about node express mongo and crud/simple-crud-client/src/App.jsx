
import './App.css'

function App() {

    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user);

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <>
            <h1>Simple CRUD</h1>
            <form onSubmit={handleAddUser}>
                <input className='border-2 mt-3 rounded-md' type='text' name='name' placeholder='Enter name' id=''/>
                <br/>
                <input className='border-2 mt-1 rounded-md' type='email' name='email' placeholder='Enter email' id=''/>
                <br />
                <input className='bg-gray-400 mt-2 p-2 rounded-lg' type='submit' value='Add User'/>
            </form>
        </>
    )
}

export default App 

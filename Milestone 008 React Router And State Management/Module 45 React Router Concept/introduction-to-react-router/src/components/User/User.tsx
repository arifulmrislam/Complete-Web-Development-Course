import { Link } from "react-router-dom";


const User = ({user}) => {
    console.log(user);
    const {email, name, id, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
        textAlign: 'left'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
            <Link to={`/user/${id}`}> Show Details</Link>
            <Link to={`/user/${id}`}> <button>Click Me</button></Link>
        </div>
    );
};

export default User;
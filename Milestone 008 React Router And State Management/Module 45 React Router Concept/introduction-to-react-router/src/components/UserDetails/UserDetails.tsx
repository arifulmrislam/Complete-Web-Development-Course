import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();

    const {name, phone, website} = user;

    const styeUser = {
        textAlign: 'left',
    }
    return (
        <div style={styeUser}>
            <h1>Details about user:</h1>
            <h3>Name: {name}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>

        </div>
    );
};

export default UserDetails;
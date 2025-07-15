
const Friend = ({friend}) => {
    const {name, email} = friend;
    return (
        <div className='border p-2 m-2 rounded bg-gray-500'>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
        </div>
    );
};

export default Friend;
const Singer = ({singer})=> {
    return (
        <div>
            <h3>Name:{singer.Name}</h3>
            <p>Age:{singer.age}</p>
        </div>
    )
}

export default Singer;
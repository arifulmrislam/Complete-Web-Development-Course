

const Link = ({route}) => {
    return (
        <div>
            <li className="gap-4 m-6 hover:bg-yellow-500 rounded">
                <a href={`route.path`}>
                {route.name}
                </a>
            </li>
        </div>
    );
};

export default Link;
import { useState, useEffect } from 'react';
import Player from '../Player/Player';
import PropTypes from 'prop-types';

const Players = ({ handlePlayerAddToSelect }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-6'>
            {players.map((player, idx) => (
                <Player
                    key={idx}
                    player={player}
                    handlePlayerAddToSelect={handlePlayerAddToSelect}
                />
            ))}
        </div>
    );
};

Players.propTypes = {
    player: PropTypes.object.isRequired,
    handlePlayerAddToSelect: PropTypes.func.isRequired
};

export default Players;
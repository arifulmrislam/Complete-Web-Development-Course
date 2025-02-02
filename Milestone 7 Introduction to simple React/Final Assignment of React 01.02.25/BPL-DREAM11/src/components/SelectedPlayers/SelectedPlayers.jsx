import PropTypes from 'prop-types';

const SelectedPlayers = ({ selectedPlayers, handlePlayerRemove }) => {
    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-4'>Selected Players</h2>
            <div className='flex flex-col gap-4'>
                {selectedPlayers.map((player, idx) => (
                    <div
                        key={idx}
                        className='border border-gray-300 rounded-2xl shadow-md p-4 bg-white'
                    >
                        <div className='flex items-center gap-4'>
                            <img 
                                className='rounded-2xl h-20 w-20 object-cover'
                                src={player.image} 
                                alt={`${player.name}'s profile`}
                            />
                            <div>
                                <h2 className='font-bold text-lg'>{player.name}</h2>
                                <p>Role: {player.role}</p>
                                <p>Price: ${player.biddingPrice.toLocaleString()}</p>
                            </div>
                            <button onClick={() => handlePlayerRemove(player)}
                            className='ml-auto bg-red-500 text-white px-4 py-2 rounded-lg'
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
};
SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    handlePlayerRemove: PropTypes.func.isRequired,
};
export default SelectedPlayers;

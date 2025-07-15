import PropTypes from 'prop-types';

const MainSection = ({selectedPlayer, selectedPlayers, availablePlayers}) => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto p-4 mt-6'>
            <div className='text-2xl text-black font-bold cursor-pointer'>
                <h2>Available Players</h2>
            </div>
            <div className="flex rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <button onClick={availablePlayers}
                    className="px-6 py-2 bg-[#E7FE29] text-black font-bold cursor-pointer"
                >
                    Available
                </button>

                <button onClick={(selectedPlayers)}
                    className="px-6 py-2 text-gray-500 bg-white cursor-pointer"
                >
                    Selected ({selectedPlayer})
                </button>
            </div>

        </div>
    );
};

MainSection.propTypes = {
    selectedPlayer: PropTypes.number.isRequired,
    selectedPlayers: PropTypes.func.isRequired,
    availablePlayers: PropTypes.func.isRequired,
};

export default MainSection;
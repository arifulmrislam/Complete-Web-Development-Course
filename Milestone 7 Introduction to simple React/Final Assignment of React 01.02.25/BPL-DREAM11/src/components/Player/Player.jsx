import { BsFillPersonFill } from "react-icons/bs";
import { TiFlag } from 'react-icons/ti';
import PropTypes from 'prop-types';

const Player = ({ player, handlePlayerAddToSelect }) => {
    const { image, name, country, rating, role, battingType, bowlingType, biddingPrice } = player;
    return (
        <div className="border border-gray-300 rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-200">
            {/* Player Image */}
            <img
                className="rounded-2xl h-60 w-full object-cover mb-4"
                src={image}
                alt={`${name}'s profile`}
            />

            {/* Player Name */}
            <div className="flex items-center gap-2 mb-2">
                <BsFillPersonFill className="text-gray-600 text-xl" />
                <h2 className="font-bold text-lg text-gray-800">{name}</h2>
            </div>

            {/* Country and Role */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <TiFlag className="text-gray-600 text-lg" />
                    <p className="text-sm text-gray-700">{country}</p>
                </div>
                <button
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
                >
                    {role}
                </button>
            </div>

            <hr className="mb-4" />

            {/* Rating */}
            <div className="text-sm text-gray-700 mb-2">
                <strong>Rating:</strong> <span className="text-yellow-500">{rating}</span>
            </div>

            {/* Batting and Bowling Type */}
            <div className="flex justify-between text-sm text-gray-700 mb-2">
                <p><strong>{battingType}</strong></p>
                <p>{bowlingType}</p>
            </div>

            {/* Price */}
            <div className=" flex justify-between items-center text-sm text-gray-700 font-medium mb-4">
                <p><strong>Price:</strong> ${biddingPrice.toLocaleString()}</p>
                <button onClick={() => handlePlayerAddToSelect(player)}
                    className="py-2 px-2 rounded-lg border-1 border-gray-200 text-gray-700 font-semibold"
                >
                    Choose Player
                </button>
            </div>


        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handlePlayerAddToSelect: PropTypes.func.isRequired
};

export default Player;
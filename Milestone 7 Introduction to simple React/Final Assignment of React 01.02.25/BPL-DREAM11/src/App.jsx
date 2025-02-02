import './App.css';
import {useState} from 'react';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import Players from './components/Players/Players';

function App() {
    const [coins, setCoins] = useState(0);
    const [selectedPlayer, setSelectedPlayers] = useState(0);

    const handleAddToCoin = (coin) => {
        // console.log('I got the coin');
        setCoins((prevCoins) => prevCoins + coin);
    };

const handlePlayerAddToSelect = (player) => {
    const { name, biddingPrice } = player; 

    if (coins < biddingPrice) {
        alert(`You don't have enough coins to buy ${name}.`);
        return;
    }

    // Deduct cost and add the player to the selected list
    setCoins((prevCoins) => prevCoins - biddingPrice);
    setSelectedPlayers((prevPlayers) => prevPlayers + 1);
};


    return (
        <>
            <Navbar coins={coins}></Navbar>
            <Banner handleAddToCoin={handleAddToCoin}></Banner>
            <MainSection selectedPlayer={selectedPlayer}></MainSection>
            <Players handlePlayerAddToSelect={handlePlayerAddToSelect}></Players>
        </>
    )
}

export default App

import './App.css';
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import Players from './components/Players/Players';
import { ToastContainer, toast } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
            toast.error(
        <div className="toast-error">
            <i className="fas fa-exclamation-circle"></i>
            <p>{`You don't have enough coins to buy ${name}.`}</p>
        </div>,
        {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    );
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
            <ToastContainer />
        </>
    )
}

export default App

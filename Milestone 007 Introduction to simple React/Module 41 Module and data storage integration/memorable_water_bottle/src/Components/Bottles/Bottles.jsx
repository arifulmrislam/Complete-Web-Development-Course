import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoreCart, removeFromLS } from "../Utilites/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle]; //previous card + new card
        setCart(newCart);
        addToLs(bottle.id); //addToLs---->add to local storage --> we want to storage only bottles id.
    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
        <div className='bottle_container'>
            {
                bottles.map(bottle => <Bottle key={bottle.id} 
                    bottle ={bottle}
                    handleAddToCart={handleAddToCart}
                    ></Bottle>)
            }
        </div>
        </div>
    );
};

export default Bottles;
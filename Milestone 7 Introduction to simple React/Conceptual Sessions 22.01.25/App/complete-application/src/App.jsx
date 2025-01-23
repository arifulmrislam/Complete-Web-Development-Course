import { useState, useEffect } from 'react'
import './App.css'
import './styles.css'
import SingleProducts from './SingleProducts';

function App() {

    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('../public/fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    //send data from parents to child and child to parent
    const handleCard = (p) => {
        // console.log(p);
        const isExist = carts.find((item) => item.id == p.id);
        // console.log(isExist);
        if (!isExist) {
            setCarts([...carts, p]);
        }
        else {
            alert('already in cart'); 
        }
    };

    const handleDelete = (id) => {
        // console.log(id);
        const newCart = carts.filter(item => item.id != id);
        setCarts(newCart);
    }

    return (
        <>
            <div className='main-container'>
                <div className='card-container'>

                    {
                        products.map(product =>
                            <SingleProducts product={product} key={product.id} handleCard={handleCard}></SingleProducts>
                        )
                    }

                </div>

                <div className='cart-container'>
                    <h1>This is Card</h1>
                    <div className='cart-title'>
                        <h5>Name</h5>
                        <h5>Price</h5>
                    </div>
                    <div>
                        {carts.map((item,index) => (
                            <div className="cart-info">
                                <p>{index + 1}</p>
                                <h5>{item.title.slice(0,10)}</h5>
                                <h5>{item.price}</h5>
                                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default App

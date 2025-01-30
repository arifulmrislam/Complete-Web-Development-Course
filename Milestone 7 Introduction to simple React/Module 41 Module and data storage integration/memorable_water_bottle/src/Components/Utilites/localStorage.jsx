const getStoreCart = () => {
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString) {
        return JSON.parse(storedCardString);
    }
    return [];
}

const saveCartToLS = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLs = (id) => {
    const cart = getStoreCart();
    cart.push(id);
    //save to local storage
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoreCart();
    //removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}
export{addToLs, getStoreCart, removeFromLS};
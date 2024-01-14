const addToLocalStorage = id => {
     let playerCart = getPlayerCart();
     const quantity = playerCart[id];
     if (quantity) {
          const newQuantity = quantity + 1;
          playerCart[id] = newQuantity;
     }
     else {
          playerCart[id] = 1;
     }
}

const getPlayerCart = () => {
     let playerCart = {};

     const storedCart = localStorage.getItem('player-cart');
     if (storedCart) {
          playerCart = JSON.parse(storedCart);
     }
     return playerCart;
}

export {
     addToLocalStorage,
     getPlayerCart
}
const addToLocalStorage = id => {
     // console.log(id);
     let playerCart = getPlayerCart();

     const quantity = playerCart[id];
     if (quantity) {
          
          alert('Already added to player');
     } else {
          playerCart[id] = 1;
     }

     localStorage.setItem('player-cart', JSON.stringify(playerCart));
}

const getPlayerCart = () => {
     let playerCart = {};
     const storedCart = localStorage.getItem('player-cart');
     if (storedCart) {
          playerCart = JSON.parse(storedCart);
     }
     return playerCart;
}

const deletePlayerCart = () => {
     localStorage.removeItem('player-cart');
}

export {
     addToLocalStorage,
     getPlayerCart,
     deletePlayerCart
}
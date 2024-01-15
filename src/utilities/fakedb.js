const addToLocalStorage = id => {
     // console.log(id);
     let playerCart ;

     const storedCart = localStorage.getItem('player-cart');
     if (storedCart) {
          playerCart = JSON.parse(storedCart);
     }
     else {
          playerCart = {};
     }

     const quantity = playerCart[id];
     if (quantity) {
          // const newQuantity = quantity + 1;
          // playerCart[id] = newQuantity;
          alert('Already added to player');
     } else {
          playerCart[id] = 1;
     }

     localStorage.setItem('player-cart', JSON.stringify(playerCart));
}

export {
     addToLocalStorage,
}
import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Cart from '../Cart/Cart'
import { addToLocalStorage, getPlayerCart } from '../../utilities/fakedb';

const Market = () => {
     const [players, setPlayers] = useState([]);

     const [cart, setCart] = useState([]);
     // console.log(cart);
   
     const handleAddToCart = (player) => {
          // console.log(player);
          
          let playerCart = [];
          
          const exists = cart.find(p => p.id === player.id);
          // console.log(exists);
          if (!exists) {
               playerCart = [...cart, player];
               // console.log('getPlayerCart');
          }
          else {
               const remaining = cart.filter(p => p.id === player.id);
               playerCart = [...remaining, exists];
          }
          setCart(playerCart);
          addToLocalStorage(player.id);
     }

     useEffect(() => { 
          fetch('players.json')
               .then(res => res.json())
          .then(data => setPlayers(data))
     }, [])
   
     useEffect(() => {
       const storedCart = getPlayerCart();
     //   console.log(storedCart);
   
       const savedCart = [];
   
          for (const id in storedCart) {
               // console.log(typeof id);
               // console.log(players);
          
               const addedPlayer = players.find((player) => player.id == id);
               // console.log("added players : ",addedPlayer);
               if (addedPlayer) {
                    savedCart.push(addedPlayer)
               }
               setCart(savedCart);
          }
     }, [players]);

     return (
          <>
               <div className='grid grid-cols-10'>
                    <div className='col-span-7'>
                         <div className='grid grid-cols-3 gap-3'>
                              {
                                   players.map(player => <Player
                                        player={player}
                                        handleAddToCart={handleAddToCart}
                                        key={player.id}
                                   ></Player>)
                              }
                         </div>
                    </div>
                    <div className='col-span-3'>
                         <Cart
                              cart={cart}
                         ></Cart>
                    </div>
               </div>
          </>
     );
};

export default Market;
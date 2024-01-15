import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Market from './components/Market/Market'
import { addToLocalStorage } from './utilities/fakedb'


function App() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (player) => {
    console.log(player);

    let playerCart = [];

    // const exists = cart.find(plr => plr.id === player.id);
    // if (exists) {
    //   playerCart = [...cart, plr];
    // }
    // else {
    //   const remaining = cart.fill(plr => plr.id === player.id);
    //   playerCart = [...remaining, exists];
    // }
    setCart(playerCart);
    addToLocalStorage(player.id);
  }

  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-10'>
        <div className='col-span-7'>
          <Market
            handleAddToCart={handleAddToCart}
          ></Market>
        </div>
        <div className='col-span-3'>
          <Cart
          ></Cart>
        </div>
      </div>
      
    </>
  )
}

export default App

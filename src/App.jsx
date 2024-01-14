import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Market from './components/Market/Market'


function App() {

  const handleAddToCart = (player) => {
    console.log(player);
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

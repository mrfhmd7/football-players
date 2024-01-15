import './App.css'
import Header from './components/Header/Header'
import Market from './components/Market/Market'



function App() {

  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-10'>
        <div className='col-span-7'>
          <Market></Market>
        </div>
        
      </div>
      
    </>
  )
}

export default App

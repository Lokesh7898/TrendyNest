import React, { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/loginPage/LoginPage';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import OrderPlaced from './Components/OrderPlaced/OrderPlaced';

const App = () => {

const [sahowLogin, setShowLogin] = useState(false)

  return (
    <>
    {sahowLogin?<LoginPage setShowLogin={setShowLogin}/>:<></>}
      <div className='App'>
        <BrowserRouter>
          <Navbar setShowLogin={setShowLogin}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/order-placed' element={<OrderPlaced />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

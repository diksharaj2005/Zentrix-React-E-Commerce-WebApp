import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import CategoryProd from './pages/CategoryProd'
import Navbar from './components/Navbar'
import axios from 'axios'
import Footer from './components/Footer'
import SingleProdutPage from './pages/SingleProdutPage'
import { useCart } from './context/Cartget'
import ProtectRoute from './components/ProtectRoute'
import SignInPage from './pages/SingInPage'
const App = () => {
  const [location, setLocation] = useState()
  const [openDetect, setOpenDetect] = useState(false)
  const { cartItem, setCartItem } = useCart()

  const forLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        // console.log(location);
        const exactloc = location.data.address
        setLocation(exactloc)
        setOpenDetect(false)

      } catch (error) {
        console.log(error)
      }
    })
  }

  useEffect(() => {
    forLocation()
  }, [])

  useEffect(() => {

    const storeCart = localStorage.getItem('cartItem')
    if (storeCart) {
      setCartItem(JSON.parse(storeCart))
    }

  }, [])


  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))

  }, [cartItem])




  return (
    <BrowserRouter>
      <Navbar location={location} forLocation={forLocation} openDetect={openDetect} setOpenDetect={setOpenDetect} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<SingleProdutPage />} />
        <Route path='/category/:category' element={<CategoryProd />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={

          <ProtectRoute>
            <Cart location={location} forLocation={forLocation} />
          </ProtectRoute>
        }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
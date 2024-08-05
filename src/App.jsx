import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Pages/Home';
import CheckOut from './Pages/CheckOut';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Item from './Pages/Item';

import { CartProvider } from './Context/CartContext'

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <CartProvider>
    <Router>
      <div className='bg-gradient-custom'>
      <ScrollToTopOnRouteChange/>
        <Navbar /> {/* Render the Navbar component */}
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='*' element={<NotKnowing/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/PM' element={<Products category="men's clothing"/>}/>
          <Route path='/PWM' element={<Products category="women's clothing"/>}/>
          <Route path='/PE' element={<Products category="electronics"/>}/>
          <Route path='/PJ' element={<Products category="jewelery"/>}/>\
          <Route path='/Privacy' element={<PrivacyPolicy/>}/>
          <Route path="/item/:itemId" element={<Item />} />
          <Route path="/Check" element={<CheckOut />} />
        </Routes>
        <Footer /> {/* Render the Footer component */}
      </div>
    </Router>
    </CartProvider>
  );
};
const NotKnowing=()=>{
  return (
    <h2 className='p-4 h-80 w-4/5'>PAGE NOT FOUND</h2>
  );
}
export default App;

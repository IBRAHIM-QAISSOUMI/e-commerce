import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
import Contact from './pages/contact';
import Product from './pages/product';
import Login from './pages/login';
import Cart from './pages/cart';
import Collection from './pages/Collection';
import Orders from './pages/Orders';
import PlaceOrder from './pages/placeOrder';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ProductsContext from './Context/CreateContext';
import {products} from './assets/frontend_assets/assets'
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  // Navbar
  const showNavbar = location.pathname !== '/notfound' && location.pathname !== '/login';

  // api des produits
  const [data ,setDate] = useState([])
  
    useEffect(()=> {
      setDate(products)
    }, [products])

  return (
    <ProductsContext value={products}>
      {showNavbar && <Navbar />}
      
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="collection" element={<Collection />} />
        <Route path="orders" element={<Orders />} />
        <Route path="placeOrder" element={<PlaceOrder />} />
        {/* <Route path="footer" element={} /> */}
      </Routes>
      <Footer/>
    </ProductsContext>
  );
}

export default App;


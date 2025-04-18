import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
import Contact from './pages/contact';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/cart';
import Collection from './pages/Collection';
import Orders from './pages/Orders';
import PlaceOrder from './pages/placeOrder';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ProductsContext from './Context/CreateContext';
import {products} from './assets/frontend_assets/assets'
import Footer from './components/Footer';
import Help from './components/Help';
import Singup from './pages/Singup';
import Profile from './pages/Profile';

function App() {
  const location = useLocation();

  // Navbar
  const showNavbar = location.pathname !== '/notfound' && location.pathname !=='/help';
  const showFooter = location.pathname !== '/notfound' && location.pathname !=='/help';

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
        <Route path="singup" element={<Singup />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="cart" element={<Cart />} />
        <Route path="collection" element={<Collection />} />
        <Route path="orders" element={<Orders />} />
        <Route path="placeOrder" element={<PlaceOrder />} />
        <Route path="help" element={<Help/>} />
      </Routes>
      {showFooter && <Footer/>}
      
    </ProductsContext>
  );
}

export default App;


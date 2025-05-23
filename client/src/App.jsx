import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import About from './pages/About';
import Home from './pages/home';
import Contact from './pages/contact';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Orders from './pages/Orders';
import PlaceOrder from './pages/placeOrder';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ProductsContext from './Context/CreateContext';
// import {products} from './assets/frontend_assets/assets'
import Footer from './components/Footer';
import Help from './components/Help';
import Singup from './pages/Singup';
import Profile from './pages/Profile';
import AdminLayout from './admin panel/AdminLayout';
import AddItemsAdmin from './admin panel/AddItemsAdmin';
import ListItemsAdmin from './admin panel/ListItemsAdmin';
import OrdersAdmin from './admin panel/OrdersAdmin';
import useProducts from './hooks/useProducts';
import AdminRoute from './custom Route/AdminRoute';


function App() {
  const location = useLocation();

  // Navbar
  const isAdminPath = location.pathname.startsWith('/admin');

const showNavbar = !['/notfound', '/help'].includes(location.pathname) && !isAdminPath;
const showFooter = !['/notfound', '/help'].includes(location.pathname) && !isAdminPath;

  // api des produits
  // const [data ,setDate] = useState([])
  
  //   useEffect(()=> {
  //     setDate(products)
  //   }, [products])
  const products = useProducts()

  return (
    <ProductsContext.Provider value={products}>
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
        <Route path="NotFound" element={<NotFound/>} />
        <Route path="admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
  <Route index element={<AddItemsAdmin />} />
  <Route path="addItems" element={<AddItemsAdmin />} />
  <Route path="listItems" element={<ListItemsAdmin />} />
  <Route path="orders" element={<OrdersAdmin />} />
</Route>

      </Routes>
      <ToastContainer />
      {showFooter && <Footer/>}
    </ProductsContext.Provider>
  );
}

export default App;


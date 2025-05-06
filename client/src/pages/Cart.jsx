import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import axiosClient from '../components/axiosClient';
import { useLink } from '../hooks/useLink';
import { assets } from '../assets/frontend_assets/assets';
import './Cart.css';
import CartTotals from '../components/CartTotals';

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotals, setCartTotals] = useState(null);
  const navigate = useNavigate();
  const shipping = 10;
  const user = useUser();
  const token = localStorage.getItem('token');

  // Get cart from the server
  const getCart = async () => {
    try {
      const response = await axiosClient.get('/api/cart');
      const data = response.data;
      setCartProducts(data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle quantity change for a product
  const handleQuantityChange = (e, index) => {
    const newCart = [...cartProducts];
    const newQuantity = parseInt(e.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity >= 1) {
      newCart[index].quantity = newQuantity;
      setCartProducts(newCart);
    }
  };

  // Delete product from cart and get updated cart
  const handleDelete = async (idCart) => {
    const validate = confirm('Are you sure?');
    if (validate) {
      try {
        await axiosClient.post(`/api/cart/delete/${idCart}`);
        // Refetch the cart after deletion to get the updated list
        getCart();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Calculate cart totals
  const getCartTotals = () => {
    const total = cartProducts.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    setCartTotals(total + shipping);
  };

  // Go to the checkout page
  const handleClickCheckout = () => {
    navigate('/placeOrder', { state: cartTotals });
  };

  // Fetch cart and totals when the component mounts or cartProducts change
  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    getCartTotals();
  }, [cartProducts]);

  console.log(token);
  

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartProducts.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  className="image-product-cart"
                  src={useLink + item.product.image1}
                  alt={item.product.name}
                />
                <div className="cart-info">
                  <p className="title-product-cart">{item.product.name}</p>
                  <div className="product-details-cart">
                    <div className="mini-details-product-cart">
                      <p>${item.product.price}</p>
                      <span className="size-box-cart">{item.size}</span>
                    </div>
                    <div className="rang">
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(e, index)}
                      />
                    </div>
                    <img
                      className="delete-cart"
                      src={assets.bin_icon}
                      alt=""
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="parent-cart-totals">
            <CartTotals
              name="checkout"
              cartTotals={cartTotals}
              shipping={shipping}
              onClick={handleClickCheckout}
            />
          </div>
        </>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import useUser from '../hooks/useUser';
import './Cart.css'

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const user = useUser()
  


    // const getUser = async () => {
    //   const {data} = useUser();
    //   if (data) {
    //       setUserData(data)
    //   }
    // }
  
    // useEffect(async() => {
    //   getUser()
    // }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(storedCart);
  }, []);

  const handleQuantityChange = (index, value) => {
    const updatedCart = [...cartProducts];
    updatedCart[index].quantity = parseInt(value) || 1;
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDelete = (index) => {
    const updatedCart = cartProducts.filter((_, i) => i !== index);
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartProducts.reduce((acc, product) => {
      const quantity = product.quantity || 1;
      return acc + product.price * quantity;
    }, 0);
  };

  console.log(user);
  

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartProducts.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image[0]} alt={product.name} />
                <div className='product-details-cart'>
                  <div className="cart-info">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <p>Size: {product.selectedSize}</p>
                  </div>
                  <div className="rang">
                    <input
                      type="number"
                      min="1"
                      value={product.quantity || 1}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                    />
                  </div>
                  <div className="delete" onClick={() => handleDelete(index)}>
                    ❌
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-totals">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

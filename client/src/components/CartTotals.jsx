import React from 'react'

function CartTotals(props) {
  return (
        <div className="cart-totals">
              <h2>CART TOTALS</h2>
              <div className='children-cart-totals'>
                <p>Subtotal</p> <div>${props.cartTotals - props.shipping}</div>
              </div>
              <div className='children-cart-totals'>
                <p>shipping Fee</p><div>${props.shipping}</div>
              </div>
              <div className='total'>
                <p>Cart totals</p><div>${props.cartTotals}</div>
              </div> 
              <button onClick={props.onClick} className='checkout'>{props.name}</button>
        </div>
  )
}

export default CartTotals
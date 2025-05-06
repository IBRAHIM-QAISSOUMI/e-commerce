import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CartTotals from '../components/CartTotals'
import axiosClient from '../components/axiosClient'
import './placeOrder.css'


function PlaceOrder() {
  const location = useLocation()
  const {state} = location
  const cartTotals = state
  const shipping = 10
  const navigate = useNavigate()
 
  const handleClickPlaceOrder = async () => {
    try {
       const response = await axiosClient.post('/api/orders') 
       navigate('/profile')
    } catch(error) {
      console.log(error);
      
    }
  }
  return (
    <div className='placeOrder-content'>
      <div className='form-payments-form'>
        <h2>DELIVERY INFORMATION</h2>
          <form className='form-payment' action="">
              <div className='double-input'>
                  <input type="text" placeholder='First name'/> 
                  <input type="text" placeholder='Last name'/> 
              </div>
              <div className='double-input'>
                <input type="email" placeholder='Email address'/>
              </div> 
              <div className='double-input'>
                  <input type="text" placeholder='City'/> 
                  <input type="text" placeholder='state'/> 
              </div>           
              <div className='double-input'>
                  <input type="numpber" placeholder='Zipcode'/> 
                  <input type="text" placeholder='Country'/> 
              </div> 
              <div className='double-input'>
                <input type="number" placeholder='Phone'/>
              </div>           
          </form>
      </div>
      <CartTotals name='place order' cartTotals={cartTotals} shipping={shipping} onClick={handleClickPlaceOrder}/>
        

    </div>
  )
}

export default PlaceOrder
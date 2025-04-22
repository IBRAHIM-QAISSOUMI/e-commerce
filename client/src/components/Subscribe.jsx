import React from 'react'
import './Subscribe.css'

function Subscribe() {
  return (
    <div className='subscribe-content'>
        <h1>Subscribe Now & get 20% off</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio expedita, lorem</p>
        <div className="input-subscribe-content">
            <input type="text" placeholder='Enter your email'/>
            <button className="subscribe">SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default Subscribe
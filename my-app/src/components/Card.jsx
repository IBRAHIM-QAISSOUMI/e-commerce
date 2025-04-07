import React from 'react'
import cardImg from '../assets/frontend_assets/p_img2_1.png';
import './card.css'


function Card(props) {
  return (
    <div className='cardContent'>
        <img className='cardImg' src={props.image} alt="card image" />
        <p className='cardName'>{props.name}</p>
        <h3 className='cardPrix'>${props.price}</h3>
    </div>
  )
}


export default Card

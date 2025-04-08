import React from 'react'
import './card.css'


function Card(props) {
  return (
    <div className='cardContent' onClick={props.onClick}>
        <img className='cardImg' src={props.image} alt="card image" />
        <p className='cardName'>{props.name}</p>
        <h3 className='cardPrix'>${props.price}</h3>
    </div>
  )
}


export default Card

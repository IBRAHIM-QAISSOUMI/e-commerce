import React from 'react'
import './MainContent.css'
import img03 from '../assets/frontend_assets/hero_img.png'

function MainContent() {
  return (
    <div className='sideContent'>
      <div className="sideLeft">
        <p> OUR BESTSELLRS</p>
        <h1 className='headerSection'>Latest Arrivals</h1>
        <p>SHOP NOW</p>
      </div>
      <div className="sideRight">
        <img className='img' src={img03} alt="img01" />
      </div>
    </div>
  )
}

export default MainContent
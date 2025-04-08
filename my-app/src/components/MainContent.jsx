import React from 'react'
import './MainContent.css'
import img03 from '../assets/frontend_assets/hero_img.png'

function MainContent() {
  return (
    <div className='sideContent'>
      <div className="sideLeft">
        <div className='titlePer' > 
          <div className='titleBordre'></div>
          <p> OUR BESTSELLRS</p>
        </div>
        <h1 className='headerSection'>Latest Arrivals</h1>
        <div className='titlePer' > 
          <p>SHOP NOW</p>
          <div className='titleBordre'></div>
        </div>
      </div>
      <div className="sideRight">
        <img className='img' src={img03} alt="img01" />
      </div>
    </div>
  )
}

export default MainContent
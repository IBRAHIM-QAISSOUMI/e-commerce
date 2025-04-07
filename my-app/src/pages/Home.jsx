import React from 'react'
import './Hero.css'
import MainContent from '../components/MainContent'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'



function home() {

  return (
    <div className='hero'>
      <MainContent/>
      <LatestCollection/>
      <BestSellers/>
    </div>
  )
}

export default home

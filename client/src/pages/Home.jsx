import React from 'react'
import './Hero.css'
import MainContent from '../components/MainContent'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import Subscribe from '../components/Subscribe'



function home() {

  return (
    <div className='hero'>
      <MainContent/>
      <LatestCollection/>
      <BestSellers/>
      <Subscribe/>
    </div>
  )
}

export default home

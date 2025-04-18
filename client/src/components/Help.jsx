import React, {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Help() {
        const navigate = useNavigate()
      const location = useLocation()
      const { state } = location;
      const product = state

      useEffect(()=> {
        navigate('/product', {state: product})
      }, product)

      
  return (
    <div></div>
  )
}

export default Help
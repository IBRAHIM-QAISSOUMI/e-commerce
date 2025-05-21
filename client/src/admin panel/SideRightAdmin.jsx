import React from 'react'
import { Link } from 'react-router-dom'
import './SideRightAdmin.css'
import { assets } from '../assets/admin_assets/assets'

function SideRightAdmin() {
    const addIcon = assets.add_icon
    const orderIcon = assets.order_icon
  return (
    <div className='admin-side-content'>
        <Link to='addItems' className='admin-link'>
            <img className='admin-icon' src={addIcon} alt="" />
            <p>Add items</p>
        </Link>
        <Link to='listItems' className='admin-link'>
            <img className='admin-icon' src={orderIcon} alt="" />
            <p>List items</p>
        </Link>
        <Link to='orders' className='admin-link'>
            <img className='admin-icon' src={orderIcon} alt="" />
            <p>Orders</p>
        </Link>
    </div>
  )
}

export default SideRightAdmin
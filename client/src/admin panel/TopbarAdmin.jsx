import React from 'react'
import './TopbarAdmin.css'
import { assets } from '../assets/admin_assets/assets'


function TopbarAdmin() {
    const adminLogo = assets.logo
    
  return (
    <div className='admin-panel-topbar'>
        <div>
            <img className='admin-logo' src={adminLogo} alt="admin-logo" />
        </div>
        <div> 
            <button className='admin-panel-logout'>Logout</button>
        </div>
    </div>
    
  )
}

export default TopbarAdmin
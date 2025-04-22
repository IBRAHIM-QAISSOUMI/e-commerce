import React from 'react'
import TopbarAdmin from './TopbarAdmin'
import SideRightAdmin from './SideRightAdmin'
import './AdminLayout.css'
import AddItemsAdmin from './AddItemsAdmin'

function AdminLayout({ children }) {
  return (
    <div className="admin-panel-content">
      <TopbarAdmin />
      <div className="admin-main-content">
        <SideRightAdmin />
        <div className="admin-page-content">
          {children || <AddItemsAdmin/>}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout

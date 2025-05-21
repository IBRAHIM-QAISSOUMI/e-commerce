import React from 'react';
import TopbarAdmin from './TopbarAdmin';
import SideRightAdmin from './SideRightAdmin';
import './AdminLayout.css';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="admin-panel-content">
      <TopbarAdmin />
      <div className="admin-main-content">
        <SideRightAdmin />
        <div className="admin-page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;


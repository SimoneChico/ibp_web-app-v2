import React from 'react';
import SideNavBar from '../SideNavBar/SideNavBar'; // Corrected path
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <SideNavBar />
      <div className="main-content">
        {/* Main content goes here */}
      </div>
    </div>
  );
}

export default Dashboard;
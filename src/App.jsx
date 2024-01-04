import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ContainerRow from './components/ContainerRow';

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

  const handleMenuItemClick = (menu) => {
    setSelectedMenuItem(menu);
  };

  return (
    <div className="app">
      <div className="dashboard-header">
        <h3>King’s restaurant</h3>
      </div>
      <Sidebar selectedMenuItem={selectedMenuItem} onMenuItemClick={handleMenuItemClick} />
      <div className="content">
        <div className="dashboard-owner">
          <p>Dashboard Owner</p>
          <div className="dashboard-pages">
            <div
              className={`page ${selectedMenuItem === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleMenuItemClick('dashboard')}
            >
              <i className="fa fa-dashboard"></i>
              <span>Dashboard</span>
            </div>
            <div
              className={`page ${selectedMenuItem === 'faq' ? 'active' : ''}`}
              onClick={() => handleMenuItemClick('faq')}
            >
              <i className="fa fa-question-circle"></i>
              <span>FAQ</span>
            </div>
          </div>
        </div>
        {selectedMenuItem === 'dashboard' && <ContainerRow />}
        {selectedMenuItem === 'faq' && <div>Frequently Asked Questions Content</div>}
      </div>
    </div>
  );
}

export default App;
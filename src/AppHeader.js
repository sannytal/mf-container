import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>My Store</h1>
      <nav>
        <ol className="center-column">
          <li>
            <NavLink to="/">Product</NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
          <li>
            <NavLink to="/feedback">Feedback</NavLink>
          </li>
        </ol>
      </nav>
    </div>
  </header>
);

export default AppHeader;

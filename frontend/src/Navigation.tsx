import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-brand">
              <Link to="#" className="navbar-brand">
                Movie Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/podcast" className="nav-link">
                Podcasts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

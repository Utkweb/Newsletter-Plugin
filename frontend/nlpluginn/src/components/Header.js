import React from "react";
import { NavLink } from "react-router-dom";
import './Subscribe.css'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/">
            <img className="w-50" src="https://www.thenewsletterplugin.com/wp-content/uploads/2014/12/tnp-logo-black-header.png" alt=""/>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav list">
              <NavLink className="nav-link active text-muted" aria-current="page" to='/'>
                Premium
              </NavLink>
              <NavLink className="nav-link text-muted" to="#">
                Documentation
              </NavLink>
              <NavLink className="nav-link text-muted" to="#">
                Support
              </NavLink>
              <NavLink className="nav-link text-muted" to="#">
                Account
              </NavLink>
              <NavLink className="nav-link text-muted" to="#">
                Blog
              </NavLink>
              <NavLink className="nav-link text-muted" to="#">
                Contact
              </NavLink>
                {/* <i class="fas fa-search"></i> */}
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

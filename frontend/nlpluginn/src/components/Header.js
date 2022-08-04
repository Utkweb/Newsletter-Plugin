import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Subscribe.css'
import { UserContext } from "./UseContext";

const Header = () => {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn, currentUser } = useContext(UserContext);
  const logout = () => {
    sessionStorage.removeItem("user")
    setLoggedIn(false)
    navigate('/login1');
  }
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
              <NavLink className="nav-link active text-muted" aria-current="page" to='/signup'>
                Signup
              </NavLink>
              <NavLink className="nav-link active text-muted" aria-current="page" to='/login'>
                Login
              </NavLink>
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
              <NavLink className="nav-link text-muted" to="/usermanager">
                Dashboard
              </NavLink>
              {!loggedIn ? (
              <li class="nav-item">
                <NavLink className="nav-link active text-white" to="/login1">
                  Login
                </NavLink>
              </li>
              )
              :
              <button className="btn btn-danger" onClick={logout}>Logout</button>
}
                {/* <i class="fas fa-search"></i> */}
                
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <header className="navbox">
      <div className="nav-box">
        <h2>This the logo</h2>
      </div>
      <br></br>
      <br></br>

      {/* <ul className="nav-box-link"> */}
      <li className="nav-link">
        <NavLink
          exact
          className="navLink"
          activeClassName="li-clicked"
          to="/save-money/add-transition"
        >
          Add Transections
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          className="navLink"
          activeClassName="li-clicked"
          to="/save-money/list-transection"
        >
          List Transections
        </NavLink>
      </li>
    </header>
  )
}

export default NavBar

// Navbar.js

import React from 'react';
import './NavBar.css';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <div className="company-name">JOTEX</div>
      <div className="nav-links">
      <Link to={"/"}  style={{textDecoration:"none"}}>  <div className="nav-link">Home</div></Link>
      {/* <Link to={"/pro"}  style={{textDecoration:"none"}}>   */}
      <div className="nav-link" onClick={()=>navigate("/product")
      }>Products</div>
      {/* </Link> */}
      <Link to={"/blogs"}  style={{textDecoration:"none"}}>  <div className="nav-link">Blogs</div></Link>
      {/* <Link to={"/Gallery"}  style={{textDecoration:"none"}}>  <div className="nav-link">Gallery</div></Link> */}
      <Link to={"/Account"}  style={{textDecoration:"none"}}>    <div className="nav-link">My Account</div></Link>
      <Link to={"/Signup"} style={{textDecoration:"none"}}>    <div className="nav-link">Signup</div></Link>
      </div>
     <Link to={"/cart"} style={{textDecoration:"none"}}><div className="cart-icon">🛒</div></Link> 
      {/* <div className='cart-count'>0</div> */}
    </div>
  );
};

export default Navbar;

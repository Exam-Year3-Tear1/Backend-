import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">About</a>
      <a href="/portfolio" className="navbar-item">Portfolio</a>
      <a href="/shop" className="navbar-item">Shop</a>
      <a href="/login" className="navbar-item">LOGIN</a>
      <a href="/signup" className="navbar-item">SIGN UP</a>
  </section>
  )

}

export default Navbar;
import React from 'react'

const Navbar = ({ brand }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">{brand}</a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar

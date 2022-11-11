import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <img src="https://blog.lifestylestores.com/wp-content/uploads/2021/02/Lifestyle-Logo-1160x444-1-800x306.webp" alt="" />
        </div>
        <div className='menu-link'>
          <ul>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Shoes & Bags</a></li>
            <li><a href="#">Beauty</a></li>
          </ul>
        </div>
        <div className="header_search">
          <input className="header_searchInput" type="text" />
        </div>
        <div className='menu-link'>
          <ul>
            <li><a href="#">More</a></li>
            <li><a href="#">SingUp</a></li>
            <li><a href="#">SignIn</a></li>
            <img src="#" alt="logo" />
            <img src="#" alt="logo" />
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

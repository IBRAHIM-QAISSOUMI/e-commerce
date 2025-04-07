import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Search } from 'lucide-react';

function Navbar() {
  return (
    <div className="topBar">
        <div className="rightTopBar">
            <img className="logoImg" src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="e-commecre site web" />
            <h2 className="">ElectroMart</h2>
        </div>
        <div className="centerTopBar">
            <ul className="listLinks">
              <li className="link"> <Link to="/">Home</Link> </li>
              <li className="link"> <Link to="Collection">Collection</Link> </li>
              <li className="link"> <Link to="About">About</Link> </li>
              <li className="link"> <Link to="Contact">Contact</Link> </li>
          </ul>
        </div>
        <div className="leftTopBar">
            <div className="search-container">
              <Search className='search-icon' size={20} />
              <input className='search-input' type="text" placeholder='Search' />
            </div>
            <Heart className='icon' size={24} />
            <ShoppingCart className='icon' size={24} />
            <User className='icon' size={24} />
            
        </div>
    </div>
  );
}

export default Navbar;

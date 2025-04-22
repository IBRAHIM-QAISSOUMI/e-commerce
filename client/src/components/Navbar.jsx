import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import { Heart, ShoppingCart, User, Search, Menu } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = assets.logo;

  return (
    <div className="topBar">
      <div className="mobileHeader">
        <Link to="/">
            <img className="logoImg" src={logo} alt="logo" />
        </Link>
        <Menu className="menuIcon" onClick={() => setMenuOpen(!menuOpen)} size={35} />
      </div>

      <div className={`navContent ${menuOpen ? 'show' : ''}`}>
        <div className="rightTopBar">
          <Link to="/">
          <img className="logoImg" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="centerTopBar">
          <ul className="listLinks">
            <li className="link"><Link to="/">Home</Link></li>
            <li className="link"><Link to="Collection">Collection</Link></li>
            <li className="link"><Link to="About">About</Link></li>
            <li className="link"><Link to="Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="leftTopBar">
          <div className="search-container">
            <Search className='search-icon' size={20} />
            <input className='search-input' type="text" placeholder='Search' />
          </div>
          <Link><Heart className='icon' size={24} /></Link>
          <Link to='/cart'><ShoppingCart className='icon' size={24} /></Link>
          <Link to='/profile'><User className='icon' size={24} /></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

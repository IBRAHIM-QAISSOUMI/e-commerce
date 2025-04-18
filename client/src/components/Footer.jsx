import React from 'react'
import './Footer.css';
import {assets} from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';

function Footer() {
    const logo = assets.logo
    const today = new Date();
    const year = today.getFullYear();

  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="right-content">
            <Link to="/">
                <img src={logo} alt="FOREVER" className="logo" />
          </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deleniti excepturi tempora voluptas rerum recusandae praesentium repellat eos! Laborum ex animi labore assumenda magni natus culpa fuga quos ipsam amet.</p>
            </div>
            <div className="footer-second-content">
            <div className="center-content">
                <h2>COMPANY</h2>
                <ul className='list-footer'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
            <div className="left-content">
                <h2>GET IN TOUCH</h2>
                <p>+212 60-1121212</p>
                <p>contact@foreveryou.com</p>
            </div>
            </div>
            
        </div>
        <div className="footer-bottom">
            <h3>Copyright  {year} &copy; forever.com - All Reserved.</h3>
        </div>
        
    </div>
  )
}

export default Footer
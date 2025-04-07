import React from 'react';
import './Product.css';
import img from '../assets/frontend_assets/p_img2_1.png'

export default function Product() {
  return (
    <div>
      <div className='content'>
        <div className="images">
          <img src={img} className="image"/>
          <div className="list-images">
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
          </div>
        </div>

        <div className="details-product">
          <h3 className="product-title">Men Round Neck Pure Cotton T-shirt</h3>

          <div className="reviews">
            <span className="stars">★★★★☆</span>
            <span className="count">(122)</span>
          </div>

          <h2 className="prix">$80</h2>

          <div className="description">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
          </div>

          <div className="size">
            <h4>Select Size</h4>
            <div className="size-options">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button key={size} className="size-btn">{size}</button>
              ))}
            </div>
          </div>

          <button className="add-to-cart">ADD TO CART</button>

          <div className="extra-info">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

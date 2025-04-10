import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './Product.css';
import RelatedProducts from '../components/RelatedProducts';

export default function Product() {
  const location = useLocation()
  const { state } = location;
  const product = state
  const [image, setImage] = useState('')
  
  useEffect(()=> {
    setImage(product.image[0])
  }, product)

  const handleClickImage = (img)=> {
    setImage(img)
  }







  return (
    <div className='product-page'>
      <div className='content'>
        <div className="images">
          <div className="list-images">
          {product.image.map((img, index)=> <img key={index} src={img} onClick={()=>{handleClickImage(img)}}/>)}
          </div>
          <img src={image} className="image"/>
        </div>

        <div className="details-product">
          <h3 className="product-title">{product.name}</h3>

          <div className="reviews">
            <span className="stars">★★★★☆</span>
            <span className="count">(122)</span>
          </div>
          <h2 className="prix">${product.price}</h2>
          <div className="description"> {product.description} </div>
          <div className="size">
            <h4>Select Size</h4>
            <div className="size-options">
              {product.sizes.map((size) => (
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
      <RelatedProducts product={product}/>
    </div>
  );
}

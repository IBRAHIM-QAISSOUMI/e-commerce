import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Product.css';
import RelatedProducts from '../components/RelatedProducts';
import {useUser} from '../hooks/useUser';

export default function Product() {
  const [selectedSize, setSelectedSize] = useState(null);
  const location = useLocation()
  const navigate = useNavigate()
  const { state } = location;
  const [product, setProduct] = useState(state)
  const [image, setImage] = useState(state.image[0])
  
  useEffect(()=> {
    setProduct(state)
  },[])

  const handleClickImage = (img)=> {
    setImage(img)
  }

  const handleSelect = (size) => {
    setSelectedSize(size);
  };

  const handleClickToCart = async (product) => {
    if (selectedSize === null) {
      alert('champ size obligatoire')
    } else{
        alert('please login')
        const {data} = await useUser();
        console.log(data);
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productToAdd = { ...product, selectedSize };
        cart.push(productToAdd);
        localStorage.setItem('cart', JSON.stringify(cart));
        // alert('product in your cart')
  }
  };
  







  return (
    <div className='product-page'>
      <div className='content'>
        <div className="images">
          <div className="list-images">
          {state.image.map((img, index)=> <img key={index} src={img} onClick={()=>{handleClickImage(img)}}/>)}
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
            {product.sizes.map((size, index) => (
              <div
                key={index}
                className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>
          </div>

          <button className="add-to-cart" onClick={()=> {handleClickToCart(product)}}>ADD TO CART</button>


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

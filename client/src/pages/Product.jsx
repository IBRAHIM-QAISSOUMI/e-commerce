import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Product.css';
import RelatedProducts from '../components/RelatedProducts';
import { useLink } from '../hooks/useLink';
import axiosClient from '../components/axiosClient';
import useUser from '../hooks/useUser';

export default function Product() {
  const [selectedSize, setSelectedSize] = useState(null);
  const location = useLocation()
  const navigate = useNavigate()
  const { state } = location;
  const [product, setProduct] = useState(state)
  const parsedSizes = JSON.parse(product.sizes);

  const [image, setImage] = useState(useLink+product.image1)
  console.log(selectedSize)
  
  useEffect(()=> {
    setProduct(state)
  },[])

  const handleClickImage = (img)=> {
    setImage(img)
  }

  const handleSelect = (size) => {
    setSelectedSize(size);
  };

  // get user:auth 
  const getUser = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }
      console.log(token);
      

      const response = await axiosClient.get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data
      return userData

      
    } catch (error) {
      console.log(error);
    }}

  // send product to cart shopping
  const handleClickAddToCart = async () => {
    if (selectedSize === null) {
          alert('champ size obligatoire') 
    } else {
      const userAuth = await getUser()
      console.log(userAuth.id);
      try {
        await axiosClient.post('/api/cart/add', {
          user_id: userAuth.id,
          product_id: product.id,
          quantity: 1,
          size: selectedSize,
        });
        navigate('/cart')
      } catch (error) {
        console.error(error);
      }
      

    }
  }

  return (
    <div className='product-page'>
      <div className='content'>
        <div className="images">
        <div className="list-images">
            {product.image1 && (
              <img src={useLink + product.image1} onClick={() => handleClickImage(useLink + product.image1)} />
            )}
            {product.image2 && (
              <img src={useLink + product.image2} onClick={() => handleClickImage(useLink + product.image2)} />
            )}
            {product.image3 && (
              <img src={useLink + product.image3} onClick={() => handleClickImage(useLink + product.image3)} />
            )}
            {product.image4 && (
              <img src={useLink + product.image4} onClick={() => handleClickImage(useLink + product.image4)} />
            )}
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
          {parsedSizes.map((size, index) => (
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

          <button className="add-to-cart" onClick={()=> {handleClickAddToCart(product.id)}}>ADD TO CART</button>


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

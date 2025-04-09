import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LatestCollection.css';
import Card from './Card';
import ProductsContext from '../Context/CreateContext';

function LatestCollection() {
  const products = useContext(ProductsContext);
  const navigate = useNavigate();
  const lastProduct = [...products].sort((a, b) => b.date - a.date).slice(0, 8);
  // const readableDate = new Date(product.date).toLocaleDateString();


  const handleClickNavigate = (product) => {
    navigate('/product', {state: product})
  }

  const handleClick = () => {
    navigate('/collection')
  }


  return (
    <div className='Content'>
      <h1>LATEST COLLECTION</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, temporibus!</p>
      <div className="product">
        {lastProduct.map((product) => (
          <Card 
            key={product._id} 
            image={product.image[0]}
            price={product.price}
            name={product.name}
            onClick={()=> {handleClickNavigate(product)}}
          />
        ))}
      </div>
      <button onClick={()=>handleClick()} className='view-more'>View more</button>
    </div>
  );
}

export default LatestCollection;
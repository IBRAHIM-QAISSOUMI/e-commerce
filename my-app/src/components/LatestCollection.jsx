import React, { useContext } from 'react';
import './LatestCollection.css';
import Card from './Card';
import ProductsContext from '../Context/CreateContext';

function LatestCollection() {
  const products = useContext(ProductsContext);
  const lastProduct = [...products].sort((a, b) => b.date - a.date).slice(0, 10);

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
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
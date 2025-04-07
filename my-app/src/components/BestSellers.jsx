import { useState, useEffect, useContext } from 'react';
import Card from './Card';
import ProductsContext from '../Context/CreateContext';

function BestSellers() {
  const products = useContext(ProductsContext);

  return (
    <div className="Content">
      <h1>BEST SELLERS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae</p>
      <div className="product">
        {products
          .filter((product) => product.bestseller === true)
          .map((product) => (
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

export default BestSellers;
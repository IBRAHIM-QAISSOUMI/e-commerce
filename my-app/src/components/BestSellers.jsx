import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import ProductsContext from '../Context/CreateContext';

function BestSellers() {
  const navigate = useNavigate()
  const products = useContext(ProductsContext);

  const handleClickNavigate = (product) => {
    navigate('/product', {state: product})
  }

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
              onClick={()=> {handleClickNavigate(product)}}
            />
          ))}
      </div>
    </div>
  );
}

export default BestSellers;
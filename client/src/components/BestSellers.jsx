import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import ProductsContext from '../Context/CreateContext';
import { useLink } from '../hooks/useLink';

function BestSellers() {
  const navigate = useNavigate()
  const products = useContext(ProductsContext);

  const handleClickNavigate = (product) => {
    navigate('/product', {state: product})
  }

  const handleClick = () => {
    navigate('/collection')
  }

  return (
    <div className="Content">
      <h1>BEST SELLERS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae</p>
      <div className="product">
        {products
          .filter((product) => product.bestseller === 1)
          .map((product) => (
            <Card
              key={product.id}
              image={useLink+product.image1}
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

export default BestSellers;
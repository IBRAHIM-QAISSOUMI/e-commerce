import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import ProductsContext from '../Context/CreateContext';
import Card from './Card';
import './relatedProducts.css'


function RelatedProducts(props) {
    const navigate = useNavigate()
    const allProducts = useContext(ProductsContext);
    const category = props.product.category;
    const subCategory = props.product.subCategory;
    const idProduct = props.product._id

    // search on related product
    const relatedProducts = allProducts.filter((product)=> 
        product.category === category && product.subCategory === subCategory
    )

    // delete product principale
    const cleanRelatedProducts = relatedProducts.filter((product)=> product._id !== idProduct)
    // just 4 product
    const FiveRelatedProducts = cleanRelatedProducts.slice(0, 5)

    const handleClickNavigate = (product) => {
        navigate('/help', {state: product})
        window.scrollTo({
            top: 0,       
            behavior: 'smooth'
          });
        
      }

  return (
    <div className="content-related-products">
        <h1>RELATED PRODUCTS</h1>
        <div className='relatedProducts'>
            
            {FiveRelatedProducts.map((product)=>
                <Card
                key={product._id}
                image={product.image[0]}
                price={product.price}
                name={product.name}
                onClick={()=> {handleClickNavigate(product)}}
            />
            )}
        </div>
    </div>
  )
}

export default RelatedProducts
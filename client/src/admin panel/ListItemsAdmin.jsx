import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import AdminLayout from './AdminLayout'
import Card from '../components/Card'
import useProducts from '../hooks/useProducts'
import {useLink} from '../hooks/useLink'
import ProductsContext from '../Context/CreateContext'
import { assets } from '../assets/frontend_assets/assets'
import axiosClient from '../components/axiosClient'
import './ListItemsAdmin.css'


function ListItemsAdmin() {
  const [products, setProducts] = useState([])

  

  // 
  // console.log(products)

  const fetchProducts = async () => {
    try {
      const response = await axiosClient.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts()
  }, [products]);
  


  const handleDeleteProduct = async (idProduct)=> {
    const validate = confirm('are youo sur')
    if(validate) {
      try {
        const responst = await axiosClient.delete(`/api/products/${idProduct}`)
      } catch (error) {
        console.log(error);
        
      }
    } 
  }
  

  return (
    <AdminLayout>
    <div className="list-item-content">
      <h3>All Products List</h3>
      <table className="table">
        <thead >
          <tr className='head-table'>
            <th className="th-table">Image</th>
            <th className="th-table">Name</th>
            <th className="th-table">Category</th>
            <th className="th-table">Prix</th>
            <th className="th-table">Action</th>
          </tr>
          
        </thead>
        <tbody >
         {products.map((product) => (
            <tr className='body-table' key={product.id}>
                <td className='td-image' ><img className='img-products-list-admin' src={useLink+product.image1}/></td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td><img className='cross-icon' src={assets.cross_icon} alt="" onClick={()=> {handleDeleteProduct(product.id)}}/></td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
    </AdminLayout>
  )
}

export default ListItemsAdmin
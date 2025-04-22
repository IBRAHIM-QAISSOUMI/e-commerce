import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import axiosClient from '../components/axiosClient'
import Card from '../components/Card'


function ListItemsAdmin() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await axiosClient.get('/api/products')
      setProducts(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <AdminLayout>
      {products.map((product) => (
          <Card 
            key={product.id} 
            image={product.image1}
            price={product.price}
            name={product.name}
          />
        ))}
    </AdminLayout>
  )
}

export default ListItemsAdmin
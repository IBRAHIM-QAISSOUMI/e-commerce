import { useEffect, useState } from 'react'
import axiosClient from '../components/axiosClient'

const useProducts = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await axiosClient.get('/api/products')
      setProducts(response.data)
    } catch (err) {
      console.error('error : ', err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return products
}

export default useProducts

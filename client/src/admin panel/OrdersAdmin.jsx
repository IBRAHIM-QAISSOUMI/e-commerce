import React, {useState, useEffect} from 'react'
import axiosClient from '../components/axiosClient'
import { assets } from '../assets/admin_assets/assets'
import { toast } from 'react-toastify';
import './OrdersAdmin.css'

function OrdersAdmin() {
  const [orders, setOrders] = useState([])
  const parcel_icon = assets.parcel_icon

  const fetchOrders = async () => {
    try {
      const response = await axiosClient.get('/api/admin/orders')
      setOrders(response.data)
    } catch (error) {
      console.log(error);
      
    }
  } 

  const handleStatusChange = (orderId, newStatus) => {
    axiosClient.put(`/api/admin/orders/${orderId}/status`, {
      status: newStatus
    })
    .then(() => {
      fetchOrders();
    })
    toast.success('status order changed')
    .catch(error => {
      console.error("Error updating status:", error);
    });
  };
  

  useEffect(()=> {
    fetchOrders()
  }, [])

  console.log(orders);
  

  return (
    <>
      <div className="orders-admin-page">
        <h2 className='order-page-title'>Order Page</h2>
        <div className="orders-admin">
          {orders.map((order) => (
            <div key={order.id} className="order-item-admin">
             
              <div className="orders-info">
              <div className="img-order-content">
                <img className='img-order' src={parcel_icon} alt="" />
              </div>
                {/* left side admin */}
                <div className="left-side-order-admin">
                <div className="product-names">
                  {order.items.map((item) => (
                    <p key={item.id}>{item.product.name}</p>
                  ))}
                </div>
                    <p className='name-useer'>{order.user.name}</p>
                    <p>{order.user.email}</p>
                </div>
                {/* end left side admin */}
                {/* ----------------center side admin */}
                <div className='center-side-order-admin'>
                    <p>Method : COD</p>
                    <p>Payment : <span>{order.status}</span></p>
                    <p>Date : <span>{new Date(order.created_at).toLocaleDateString()}</span></p>   
                </div>
                {/* end center side admin */}
                {/* ------------------right side admin */}
                <div className='right-side-order-admin'>
                    <p>${parseFloat(order.total_price ) + 10}</p>
                </div> 
                {/* end right side admin */}

              </div>
              <div className="status-order-admin-two">
                  <select value={order.status} onChange={(e) => handleStatusChange(order.id, e.target.value)}>
                    <option value="pending">Order Placed</option>
                    <option value="processing">Packing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="canceled">canceled</option>
                  </select>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
 )
}

 export default OrdersAdmin
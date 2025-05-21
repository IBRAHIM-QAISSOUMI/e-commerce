import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../components/axiosClient';
import { useLink } from '../hooks/useLink';
import { LogOut } from 'lucide-react';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './Profile.css';
import useUser from '../hooks/useUser';

function Profile() {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  const user = useUser();


  // get orders
  const getOrders = async () => {
    try {
        const response = await axiosClient.get('/api/orders')
        const data = response.data
        setOrders(data)
    }catch(error) {
      console.log(error);
      
    }
  }

  console.log(orders);
  



  // logout
  const logout = async () => {
    try {
      await axiosClient.post('/api/logout');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.log('Logout failed', error); 
    }
  };


  useEffect(()=> {
    getOrders()
  }, [])


  // test sweetalert here
  const handleClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  console.log(user);


  // test toast here


  const showSuccess = () => toast.success("تم بنجاح!");
  const showError = () => toast.error("حدث خطأ!");
  const showWarning = () => toast.warn("تحذير!");
  const showInfo = () => toast.info("هذه معلومة!");
  const showDefault = () => toast("رسالة عادية");
  

  

  return (
    <div className='profile-content'>
      <div className='logout-content'>
      {/* <div>
      <button onClick={showSuccess}>نجاح</button>
      <button onClick={showError}>خطأ</button>
      <button onClick={showWarning}>تحذير</button>
      <button onClick={showInfo}>معلومة</button>
      <button onClick={showDefault}>عادية</button>
      
    </div> */}
          <p>Welcome {user?.name || '...'}</p>
          <button className='logout' onClick={logout}> <LogOut size={24} /></button>
      </div>
      {orders.length === 0 ? (
          <p>No orders available.</p>
        
      ) : (

        <>
          
          <div className='orders-content'>
            <h2 className='orders-title'>MY ORDERS</h2>
            {orders.map((order) => (
              <>
              {order.items.map((item)=> (
              <div key={item.id} className='order-item'>
                  <div className='left-item'>
                    <img src={useLink + item.product.image1} alt="" />
                    <div className='order-info'>
                      <p className='order-name'>{item.product.name}</p>
                      <div className='order-product-details'>
                          <p>${item.product.price}</p>
                          <p>Quantity: <span className="span-weeky">{item.quantity}</span></p>
                          <p>Size: <span className="span-weeky">{item.size}</span></p>
                      </div>
                      <div>date : <span className="span-weeky">{new Date(order.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span></div>
                      <div>Payment: <span className="span-weeky">COD</span></div>
                    </div>
                  </div>
                  <div className="center-item">
                    <span className='status'></span><p>{order.status}</p>
                  </div>
                  <div className="right-item">
                    <button className='button-track-order'>track order</button>
                  </div>
            </div>
            ))}
                  </>
            ))}
          </div>
          
        </>
          
        ) }
      </div>
    );
}

export default Profile;

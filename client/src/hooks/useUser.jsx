import { useEffect, useState } from 'react';
import axiosClient from '../components/axiosClient';
import { useNavigate } from 'react-router-dom';

const useUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axiosClient.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response?.data) {
          setUser(response.data);
        } else {
          navigate('/login');
        }
      } catch (error) {
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  return user;
};

export default useUser;














// import axiosClient from '../components/axiosClient';

// export const useUser = async () => {
//     let data= null;
//     try {
//       const token = localStorage.getItem('token');
       
//         const response = await axiosClient.get('/api/user', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
          
//         });

//         console.log(response.data);
        
//         if(response?.data) {
//             data = response?.data;
//             return {data}
//         }else{
//           return  window.location.href = '/login';
//         }
          
         
        
       
//     } catch (error) {
//         return  window.location.href = '/login';
         
//     }
//   };
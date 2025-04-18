import axiosClient from '../components/axiosClient';

export const useUser = async () => {
    let data= null;
    try {
      const token = localStorage.getItem('token');
       
        const response = await axiosClient.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          
        });

        console.log(response.data);
        
        if(response?.data) {
            data = response?.data;
            return {data}
        }else{
          return  window.location.href = '/login';
        }
          
         
        
       
    } catch (error) {
        return  window.location.href = '/login';
         
    }
  };
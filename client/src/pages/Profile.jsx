import React, { useState, useEffect } from 'react';
import axiosClient from '../components/axiosClient';
import './Profile.css'
import {useUser} from '../hooks/useUser';


function Profile() {
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const {data} = await useUser();
    console.log(data);
    if (data) {
        setUserData(data)
    }
  }

  useEffect(async() => {
    getUser()
  }, []);

  const logout = async () => {
    try {
      await axiosClient.post('/api/logout');
      localStorage.removeItem('token');
      window.location.href = '/login';
    } catch (error) {
      console.log('Logout failed', error);
    }
  };
  

  return (
    <div className='profile-content'>
      <h2 className='profile-title'>Your Profile</h2>
      {userData.name ? (
        <div>
          <p>welcome to back {userData.name}</p>
          <button className='logout' onClick={()=> logout()}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;

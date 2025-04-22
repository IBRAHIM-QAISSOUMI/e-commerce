import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../components/axiosClient';
import './Profile.css';
import useUser from '../hooks/useUser';

function Profile() {
  const navigate = useNavigate()
  const user = useUser();

  const logout = async () => {
    try {
      await axiosClient.post('/api/logout');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.log('Logout failed', error);
    }
  };

  return (
    <div className='profile-content'>
      <h2 className='profile-title'>Your Profile</h2>
      {user ? (
        <div>
          <p>Welcome to back {user.name}</p>
          <button className='logout' onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;

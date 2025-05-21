import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosClient from '../components/axiosClient';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.get('/sanctum/csrf-cookie');
      const response = await axiosClient.post('/api/login', {
        email,
        password,
      });

      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Login successful!');
      window.location.href = '/profile';
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        toast.error('email or password incorrect');
      }
    }
  };

  return (
    <div className='login-content'> 
      <form className='login-form' onSubmit={login}>
        <h2  className='login-title'>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <p className='error'>{errors.email[0]}</p>}

        <div className='input-content' style={{ position: 'relative' }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%' }}
          />
          <span 
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: 15,
              top: '70%',
              transform: 'translateY(-50%)',
              cursor: 'pointer'
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {errors.password && <p className='error'>{errors.password[0]}</p>}
        {errorLogin && <p className='error'>{errorLogin}</p>}

        <div className="liens">
          <Link to="#">forget password</Link>
          <Link to="/singup">create account</Link>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

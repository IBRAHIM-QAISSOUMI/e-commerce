import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosClient from '../components/axiosClient'


function Singup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
    };

    const singup = async (e) => {
      e.preventDefault();
      try {
        const response = await axiosClient.post('/api/register', {
          name,
          email,
          password,
        });
        const message = response.data.message
        alert(message)
        window.location.href = '/login';
        }catch (error) {
          if (error.response && error.response.status === 422) {
            setErrors(error.response.data.errors);
          }
        }
    }
  return (
       <>
        <div className='login-content'> 
          <form className='login-form' 
          onSubmit={singup}
          >
          <h2 className=''>Sing Up</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {errors.name && <p className='error'>{errors.name[0]}</p>}
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
            <div className="liens">
              <Link to="#">forget password</Link>
              <Link to="/login">Login</Link>
            </div>
            <button style={{marginTop:'30px'}} type="submit">sing up</button>
          </form>
        </div>
       </>
  )
}

export default Singup
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Simulate authentication logic (replace with actual authentication)
    if (username === 'vids' && password === '12345678') {
      setIsLoggedIn(true);
      navigate('/ourcourse')
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div  className='product-container mnm'>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='payment-card'>
          <label>
            Username:
            <input
              type="text"
              className='inputa'
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              className='inputa'
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button className='btn btn-primary' onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import './Login.css';



const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); 

    if (username.trim() === '') {
      setPasswordError('');
      setUserError('Please enter your username.');
    } else if (password.trim() === '') {
      setUserError('');
      setPasswordError('Please enter your password.');
    } else if (username !== 'demo') {
      setPasswordError('');
      setUserError('Invalid username');
    } else if (password !== 'demo') {
      setUserError('');
      setPasswordError('Incorrect password');
    } else {
      setUserError('');
      setPasswordError('');
      onLogin();
    }
  };

  return (
    <div className='holder'>
      <div className='globe-holder'>
        <img src='globe.png' alt='globe icon'/>
      </div>
      <div className='login-holder'>
        <div className='logo-holder-l'>
            <img src='logo.png' alt='logo'></img>
        </div>
        <form onSubmit={handleLogin}>
          <p className='heading'><b>Login</b></p>
          <br></br>
          
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder= ' &#952; Username'/>
          <br></br>
          {userError && <p className="error">{userError}</p>}
          <br></br>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder= ' &#128273; Password' />
          <br></br>
          {passwordError && <p className="error">{passwordError}</p>}
          <br></br>
          <div className='submit-holder'>
            <a  id='forgotpassword' href='#'>Forgot Password?</a>
            <button type="submit" id='login-submit'>Sign In</button>
          </div> 
        </form>
      </div>
    </div>
  );
};

export default Login;

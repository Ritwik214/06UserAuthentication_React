import React, { useState } from 'react';
import firebase from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('Login successful!');
    } catch (error) {
      alert(`Login error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email</label>
      <input
        type='email'
        name={`uniqueEmail${new Date().getTime()}`}
        value={email}
        autoComplete='new-email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type='password'
        name={`uniquePassword${new Date().getTime()}`}
        value={password}
        autoComplete='new-password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

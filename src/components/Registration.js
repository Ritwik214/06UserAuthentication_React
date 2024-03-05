import React, { useState } from 'react';
import firebase from '../firebase';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistrationWithEmailAndPassword = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert('Registration successful! Please login.');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email is already in use. Please login.');
      } else {
        alert(`Registration error: ${error.message}`);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(provider);
      alert('Registration successful! Please login.');
    } catch (error) {
      alert(`Google Sign-In error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <label>Email:</label>
      <input type="email"
      autoComplete="new-email"
      value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password"
      autoComplete="new-password"
      value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistrationWithEmailAndPassword}>Register with Email</button>
      <button onClick={handleGoogleSignIn}>Register with Google</button>
    </div>
  );
};

export default Registration;

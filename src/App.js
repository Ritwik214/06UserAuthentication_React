import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import ProtectedContent from './components/ProtectedContent';
import firebase from './firebase';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      {/* Navigation Bar with Register and Login links */}
      <nav>
        <ul>
          <li><Link to="/registration">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/registration"
          element={<Registration />}
        />
        <Route
          path="/protected"
          element={user ? <ProtectedContent /> : <Navigate to="/login" />}
        />
        {/* Redirect to /protected if authenticated, otherwise to /login */}
        <Route
          path="/"
          element={user ? <Navigate to="/protected" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

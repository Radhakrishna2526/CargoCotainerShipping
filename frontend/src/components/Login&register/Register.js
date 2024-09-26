import React, { useState, useEffect } from 'react';
import './Register.css'; // Import the CSS file
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  //const [agreedToTerms, setAgreedToTerms] = useState(false);

  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  const navigate = useNavigate();

  useEffect(() => {

    if (isAuthenticated) {
      navigate('/')
    }

    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, isAuthenticated, error])



  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle registration logic here (e.g., API request)
    console.log('Registering:', { name, email, password, phone });

    dispatch(register({ name, email, password, phone }))
  };

  return (
    <div className="register-page">
      <div className="background-imagee"></div> {/* Background image */}
      <div className="dim-overlay"></div> {/* Dimmed overlay */}
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleRegister}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor='c'>I agree to the terms and conditions
              <input 
                type="checkbox" 
                id="c"
                checked={agreedToTerms} 
                onChange={(e) => setAgreedToTerms(e.target.checked)} 
                required 
              /> </label>
          
          </div> */}
          <button type="submit" className="auth-button">Register</button>
          <Link to='/login'>  <p className="toggle-link">Already have an account? Login</p></Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

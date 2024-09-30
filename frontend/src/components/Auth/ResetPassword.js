import React, { Fragment, useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, clearErrors } from '../../actions/userActions'
import { useNavigate, useParams } from 'react-router-dom'
import './ResetPassword.css'; // Add any necessary styling

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { error, success } = useSelector(state => state.forgotPassword)
  const { token } = useParams();

  useEffect(() => {

    if(error) {
        alert(error);
        dispatch(clearErrors());
    }

    if(success) {
        alert('Password updated successfully');
        navigate('/login');
    }

}, [dispatch, alert, error, success])


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    let formData = {
      newPassword : password,
      confirmPassword
    };

    dispatch(resetPassword(token, formData))
  };

  return (
    <div className="reset-password-page">
      <div className="auth-containers">
        <form className="auth-forms" onSubmit={handleSubmit}>
          <h3>Reset Your Password</h3>

          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder='Enter your new password'
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
              placeholder='Confirm your new password'
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

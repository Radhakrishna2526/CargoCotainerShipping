import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './ForgotPassword.css';

import { login, clearErrors, forgotPassword } from '../../actions/userActions';

const ForgotPassword = () => {

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, message, loading } = useSelector(state => state.forgotPassword)

  useEffect(() => {

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert(message);
    }

  }, [dispatch, alert, error, message])

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <div className="forgot-page"> {/* Isolated container for background */}
      <div className="background-image"></div> {/* Background image */}
      <div className="dim-overlay"></div> {/* Dimmed overlay */}
      <div className="auth-containerR">
        <form className="auth-form" onSubmit={handleLogin}>
          <div className='top'>
            <img src='/images/logo4.png' className="pic1" alt="Logo" />
            <h3>ENTER YOUR EMAIL</h3>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder='ENTER YOUR MAIL TO RESET THE PASSWORD'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className='sub'>
              <Link to='/login'>
                <p className="back">Back</p>
              </Link>
              <button
                id="forgot_password_button"
                type="submit"
                className="btn btn-block py-3 submit"
                disabled={loading ? true : false} >
                Send Email
              </button>
            </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './payment.css'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

import {removeContainerFromCart} from '../../actions/bookingActions'

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const { user, loading } = useSelector(state => state.auth)
  const { containerId, locationId, destinationId, availableFrom } = useSelector(state => state.containerSelected);
 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format";
    }
    
    if (!/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', { cardNumber, expiryDate, cvv });
      // Here you can integrate with a payment provider like Stripe or PayPal
    } else {
      setErrors(formErrors);
    }
    handleBook();
  };

  const handleBook = async () => {
    try {
        // Make a POST request to book the container
        await axios.post('https://localhost:7240/api/Booking/book', { 
            
                userId: user.id,
                containerId,
                sourcePortId: locationId,
                destinationPortId: destinationId,
                shippingDate: availableFrom
            
        });
        alert(`Container ${containerId} has been booked successfully!`);
        dispatch(removeContainerFromCart());
        navigate('/');
    } catch (err) {
        alert(`Failed to book container ${containerId}. Please try again.`);
    }
};

useEffect(() => {

  if(!containerId) {
    alert('Login and select a container to access this page');
      navigate('/');
  }

}, [dispatch, containerId])


  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>

        {/* Card Number */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            maxLength="16"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
            placeholder="1234 1234 1234 1234"
          />
          {errors.cardNumber && <span style={{ color: 'red' }}>{errors.cardNumber}</span>}
        </div>

        {/* Expiry Date */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
          />
          {errors.expiryDate && <span style={{ color: 'red' }}>{errors.expiryDate}</span>}
        </div>

        {/* CVV */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            maxLength="4"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
            placeholder="123"
          />
          {errors.cvv && <span style={{ color: 'red' }}>{errors.cvv}</span>}
        </div>

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;

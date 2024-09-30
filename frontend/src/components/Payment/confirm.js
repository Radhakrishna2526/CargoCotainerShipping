import React from 'react';
import { useLocation } from 'react-router-dom'; // To fetch the passed props
import './confirm.css'; // Import the CSS file

const ConfirmationPage = () => {
    const location = useLocation();
    const { locationName, destinationName, availableFrom, type, size } = location.state || {};

    return (
        <div className="confirmation-page">
            <div className="confirmation-container">
                <img src="/images/tick.jpg" alt="Success" className="success-icon" />
                <h1>Booking Confirmed!</h1>
                <p>Your container has been successfully booked.</p>
                <h2 className='hello'>CHECK YOUR EMAIL FOR CONFIRMATION</h2>
                <div className="container-details">
                    {/* Removed the Container ID */}
                    <div className="detail-item">
                        <h2>Type</h2>
                        <p>{type}</p>
                    </div>
                    <div className="detail-item">
                        <h2>Size</h2>
                        <p>{size}</p>
                    </div>
                    <div className="detail-item">
                        <h2>Source Port</h2>
                        <p>{locationName}</p>
                    </div>
                    <div className="detail-item">
                        <h2>Destination Port</h2>
                        <p>{destinationName}</p>
                    </div>
                    <div className="detail-item">
                        <h2>Available From</h2>
                        <p>{availableFrom}</p>
                    </div>
                </div>

                <button className="home-button" onClick={() => window.location.href = '/orders'}>
                   Check Orders
                </button>
                <button className="home-buttonn" onClick={() => window.location.href = '/'}>
                   Go Back Home
                </button>
            </div>
        </div>
    );
};

export default ConfirmationPage;

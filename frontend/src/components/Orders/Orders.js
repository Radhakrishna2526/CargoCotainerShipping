import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Orders.css'; // Import the CSS file
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap';
import { clearErrors, myOrders } from '../../actions/orderActions';

const BookingDetails = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)
    const { loading, error, orders = [] } = useSelector(state => state.myOrders);

    useEffect(() => {
        dispatch(myOrders(user.id));

        if (error) {
            // alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch,  error])

    // Fetch booking details when user ID is entered and form is submitted
    const handleSearch = async (e) => {
        e.preventDefault();
    };

    // Function to format DateOnly strings
    const formatDate = (dateString) => {
        if (!dateString) return ''; // Handle empty or undefined date
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Format date as needed (e.g., MM/DD/YYYY)
    };

    return (
        <div className="containerr">
            <div className="background"></div> {/* Background image */}
            <h3 className="text-white">My Orders</h3>

            {/* Error message */}
            {error && <p className="text-danger">{error}</p>}

            {/* Conditionally render table only after search and if data exists */}
            {orders.length > 0 && (
                <Table striped bordered hover responsive className="booking-table">
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>User Name</th>
                            <th>Container Type</th>
                            <th>Container Size</th>
                            <th>Source Port</th>
                            <th>Destination Port</th>
                            <th>Booking Date</th>
                            <th>Delivery Date</th>
                            <th>Out Of Delivery</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((booking) => (
                            <tr key={booking.bookingId}>
                                <td>{booking.bookingId}</td>
                                <td>{booking.userName}</td>
                                <td>{booking.containerType}</td>
                                <td>{booking.containerSize}</td>
                                <td>{booking.sourceportLocation}</td>
                                <td>{booking.destinationportLocation}</td>
                                <td>{formatDate(booking.bookingDate)}</td> {/* Formatting date */}
                                <td>{formatDate(booking.deliveryDate)}</td> {/* Formatting date */}
                                <td>{formatDate(booking.outOfDelivery)}</td> {/* Corrected to use outOfDelivery */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            {/* No orders found message */}
            {orders.length === 0 && !loading && (
                <p className="text-center text-white">No orders found for this user ID.</p>
            )}
        </div>
    );
};

export default BookingDetails;

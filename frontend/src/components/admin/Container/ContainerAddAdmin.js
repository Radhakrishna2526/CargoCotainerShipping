import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newContainer, clearErrors } from '../../../actions/containerActions';
import { useNavigate } from 'react-router-dom';
import { NEW_CONTAINER_RESET } from '../../../constants/containerConstants';
import './ContainerAddAdmin.css'; // Import the CSS file for styling

const ContainerAddAdmin = () => {
    const [size, setSize] = useState('');
    const [type, setType] = useState('');
    const [capacity, setCapacity] = useState('');
    const [sourcePort, setSourcePort] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');

    const Ports = [
        'Nhava Sheva',
        'Mumbai Port',
        'Chennai Port',
        'Ennore Port',
        'Kolkata Port',
        'Haldia Port',
        'Cochin Port',
        'Mundra Port',
        'Kandla Port',
        'Vishakhapatnam Port'
    ];

    const ShippingCompanies = [
        'ABS Marine',
        'Evergreen Line',
        'ONE Ocean Network Express',
        'OOCL',
        'Essar Shipping'
    ];

    const ContainerTypes = [
        'Dry containers',
        'Reefer containers',
        'Flat rack containers',
        'Open top containers',
        'Tank containers'
    ];

    const containerStandardSizes = [
        '20FT General',
        '20FT High Cube',
        '40FT General',
        '40FT High Cube'
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, success } = useSelector(state => state.newContainer);

    useEffect(() => {
        if (error) {
            alert.error(error); // Display error if exists
            dispatch(clearErrors()); // Clear the error from state
        }
        if (success) {
            navigate('/admin/container'); // Navigate to the container list
            alert('Container created successfully'); // Success alert
            dispatch({ type: NEW_CONTAINER_RESET }); // Reset the success state
        }
    }, [dispatch, error, success, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Create a container object with form data
        const container = {
            size,
            type,
            sourcePort,
            companyName,
            capacity,
            availableFrom
        };

        // Dispatch the action to create a new container
        dispatch(newContainer(container));
    };

    return (
        <div className="add-container-form">
            <h1>Add Container</h1>
            {error && <div className="errorMessage">{error}</div>}
            {success && <div className="successMessage">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label className="formLabel">Company Name:</label>
                    <select
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="formSelect"
                        required
                    >
                        <option value="" disabled hidden>Select Your Company</option>
                        {ShippingCompanies.map((company, index) => (
                            <option key={index} value={company}>
                                {company}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Type:</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="formSelect"
                        required
                    >
                        <option value="" disabled hidden>Select Type of Container</option>
                        {ContainerTypes.map((containerType, index) => (
                            <option key={index} value={containerType}>
                                {containerType}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Size:</label>
                    <select
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="formSelect"
                        required
                    >
                        <option value="" disabled hidden>Select Size of Container</option>
                        {containerStandardSizes.map((containerStandardSize, index) => (
                            <option key={index} value={containerStandardSize}>
                                {containerStandardSize}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Source Port:</label>
                    <select
                        value={sourcePort}
                        onChange={(e) => setSourcePort(e.target.value)}
                        className="formSelect"
                        required
                    >
                        <option value="" disabled hidden>Select Port Location</option>
                        {Ports.map((port, index) => (
                            <option key={index} value={port}>
                                {port}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Available For Booking:</label>
                    <input
                        type="date"
                        value={availableFrom}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                        className="formInput"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label className="formLabel">Capacity:</label>
                    <input
                        type='number'
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        className="formInput"
                        required
                    />
                </div>
                <button type="submit" className="submitButton">Add Container</button>
            </form>
        </div>
    );
};

export default ContainerAddAdmin;

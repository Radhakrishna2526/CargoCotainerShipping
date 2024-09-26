import axios from 'axios'

import {    
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants'

// Get curretly logged in user orders
export const myOrders = (userId) => async (dispatch) => {
    try {
        
        dispatch({ type: MY_ORDERS_REQUEST });

        // // Make GET request with query parameters
        // const { data } = await axios.get('https://localhost:7240/api/Booking/GetBookingDetails', {
        //     params: {
        //         userId : userId
        //     }
        // });
        const { data } = await axios.get(`https://localhost:7240/api/Booking/GetBookingDetails/${userId}`);

        dispatch({
            type: MY_ORDERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MY_ORDERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })    
 }
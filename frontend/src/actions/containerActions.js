import axios from 'axios'

import {    
    NEW_CONTAINER_REQUEST,
    NEW_CONTAINER_SUCCESS,
    NEW_CONTAINER_FAIL,
    CLEAR_ERRORS
} from '../constants/containerConstants'

// Add Container (Admin)
export const newContainer = (containerData) => async(dispatch) => {
    try {

        dispatch({ type: NEW_CONTAINER_REQUEST })

        const config = {
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        // const { data } = await axios.post(`/api/v1/admin/product/new`, productData, config)
        const  data = {
            success : 'true'
        }

        dispatch({
            type: NEW_CONTAINER_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: NEW_CONTAINER_FAIL,
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
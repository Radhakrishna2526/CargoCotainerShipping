import {
    SELECT_CONTAINER,
    REMOVE_CONTAINER,
    CLEAR_ERRORS
} from '../constants/bookingConstants';


export const addContainerToCart = (containerId, locationId, destinationId, availableFrom) => async (dispatch) => {
    
    dispatch({
        type: SELECT_CONTAINER,
        payload: {
            containerId,
            locationId, 
            destinationId, 
            availableFrom
        }
    })

}

export const removeContainerFromCart = () => async (dispatch) => {

    dispatch({
        type: REMOVE_CONTAINER
    })

}
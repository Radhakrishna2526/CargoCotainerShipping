import {
    SELECT_CONTAINER,
    REMOVE_CONTAINER
} from '../constants/bookingConstants';


export const bookingReducer = (state = { }, action) => {
    
    const bookingContainerDetails = action.payload;

    switch (action.type) {

        case SELECT_CONTAINER:
            return {
                ...state,
                ...bookingContainerDetails
            }

        case REMOVE_CONTAINER:
            return { }

        default:
            return state
    }
}

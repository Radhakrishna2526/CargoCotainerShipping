import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { authReducer, forgotPasswordReducer
    // ,userReducer 
    } from './reducers/userReducers';
import { bookingReducer } from './reducers/bookingReducers';
import { myOrdersReducer } from './reducers/orderReducers';


// Combine all reducers
const rootReducer = combineReducers({
    auth: authReducer,     
    // user: userReducer  
    containerSelected: bookingReducer,
    myOrders: myOrdersReducer,
    forgotPassword: forgotPasswordReducer
});

// Initial state of the store
const initialState = {
    auth: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};

// Middleware setup
const middleware = [thunk];

// Create Redux store
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

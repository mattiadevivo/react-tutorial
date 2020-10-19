import { createStore, combineReducers } from 'redux';
import bugReducer from './reducers/bugReducer';
import authReducer from './reducers/authReducer';

const store = createStore(combineReducers({
    bugReducer, authReducer // Syntactic sugar for bugReducer: bugReducer, authReducer: authReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()/*Needed by Redux Chrome extension*/);

export default store;
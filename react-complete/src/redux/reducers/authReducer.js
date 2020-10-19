import * as actions from '../actionTypes';

export default function loggedReducer(state = false, action) {
    switch(action.type) {
        case actions.LOGGING_IN:
            return true;
        case actions.LOGGING_OUT:
        default: return false;
    }
}
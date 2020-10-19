import * as actions from './actionTypes';
// state is a [] of bugs
let lastId = 0;

export default function reducer(state = [], action) {
    switch(action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_SOLVED:
            return state.map((bug) => bug.id !== action.payload.id ? bug : {...bug, resolved: true});
        default: return state;  // Action is not defined so return the same state
    }
}
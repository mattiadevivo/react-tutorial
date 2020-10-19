import * as actions from './actionTypes';

export const bugAdded = (description) => ({
    type: actions.BUG_ADDED,
    payload: {
        description: description
    }
});

export function bugRemoved(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: id
        }
    };
}

export const bugSolved = (id) => ({
    type: actions.BUG_SOLVED,
    payload: {
        id: id
    }
});
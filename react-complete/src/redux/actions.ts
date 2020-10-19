import * as actions from './actionTypes';

export const bugAdded = (description: string) => ({
    type: actions.BUG_ADDED,
    payload: {
        description: description
    }
});

export function bugRemoved(id: number) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: id
        }
    };
}

export const bugSolved = (id: number) => ({
    type: actions.BUG_SOLVED,
    payload: {
        id: id
    }
});

export const userLoggedIn = () => ({
    type: actions.LOGGING_IN,
});

export const userLoggedOut = () => ({
    type: actions.LOGGING_OUT,
});
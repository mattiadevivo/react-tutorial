import store from './redux/store';
import {bugAdded, bugRemoved, bugSolved} from './redux/actions';

// Function we pass to subscribe method will be executed every time the store is modified
const unsubscribe = store.subscribe(() => {
    // Reload UI
    console.log('Store changed', store.getState());
});
// Unsubscribe can be used to no longer need to reload UI on store changes

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugSolved(1));
//store.dispatch(bugRemoved(1));
console.log(store.getState());
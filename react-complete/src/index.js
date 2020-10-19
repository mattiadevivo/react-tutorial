import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import * as actions from './redux/actions';

const unsubscribe = store.subscribe(() => {
  // Reload UI
  console.log('Store changed', store.getState());
});

store.dispatch(actions.bugAdded('Primo bug'));

ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//store.dispatch(actions.userLoggedIn());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

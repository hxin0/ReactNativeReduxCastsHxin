import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC2U8-zTNb3bYGi6GNEaMO64G0_rk8MDK0',
      authDomain: 'auth-958d4.firebaseapp.com',
      databaseURL: 'https://auth-958d4.firebaseio.com',
      storageBucket: 'auth-958d4.appspot.com',
      messagingSenderId: '617230755426'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

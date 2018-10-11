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
      apiKey: 'AIzaSyBRsGV4b5JbFtnbiMurYnRm3VwqOYJla_8',
      authDomain: 'manager-691c6.firebaseapp.com',
      databaseURL: 'https://manager-691c6.firebaseio.com',
      projectId: 'manager-691c6',
      storageBucket: 'manager-691c6.appspot.com',
      messagingSenderId: '871177191553'
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

import React, {Component} from 'react';
import Routes from './routes';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import logger from './middleware';
import reducer from './reducer';


const store = createStore(reducer, applyMiddleware(logger));

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import { todoReducer } from './store/todoRedux';

const store = createStore(todoReducer)

ReactDOM.render (
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById("root")
);
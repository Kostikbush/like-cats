import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Component/Wrapper-component/App';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/reducer';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
  ),
))

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


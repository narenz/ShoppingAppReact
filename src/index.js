import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import products from './Data/ProductListData.json';

const productsInInventoryReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_APP':
    case 'FETCH_PRODCTS':
      return products;
    default:
      return [];
  }
}

const ProductsInBasketReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return [...state, action.payload.item];
    case 'RESET_APP':
      return [];
    default:
      return [];
  }
}

const store = createStore(
  combineReducers({
    productsInInventoryReducer: productsInInventoryReducer,
    ProductsInBasketReducer: ProductsInBasketReducer
  }),
  {},
  applyMiddleware(logger()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
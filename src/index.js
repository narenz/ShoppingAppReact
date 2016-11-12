import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import products from './Data/ProductListData.json';

const productsInInventoryReducer = (state = products, action) => {
  switch (action.type) {
    case 'RESET_APP':
    case 'FETCH_PRODCTS':
      state = products;
      break;
    default:
      state = products;
  }
  return state;
}

const ProductsInBasketReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      break;
    default:
  }
  return state;
}

const store = createStore(combineReducers({
  productsInInventoryReducer: productsInInventoryReducer,
  ProductsInBasketReducer: ProductsInBasketReducer
}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
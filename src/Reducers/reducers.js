import products from '../Data/ProductListData.json';

const initialState = {
  inventory: products,
  basket: []
}

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case 'RESET_APP':
    case 'FETCH_PRODCTS':
      return initialState;
    case 'CHECKOUT':
      return { ...state,
               basket: [] };
    case 'ADD_ITEM':
      const index = state.inventory.indexOf(action.payload);
      let modifiedItemQuantity = { ...state.inventory[index], quantity: state.inventory[index].quantity - 1 }
      return {  ...state,
                basket: [...state.basket, { ...action.payload, id:state.basket.length  }],
                inventory: [  ...state.inventory.slice(0, index),
                              modifiedItemQuantity,
                              ...state.inventory.slice(index + 1) ]
              };
    default:
      return initialState;
  }
}

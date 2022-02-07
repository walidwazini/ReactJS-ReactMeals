// Will be use to manage cart-context
import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // concat() : return a new array 
    const updatedTotalAmount = state.totalAmount
      + action.item.price * action.item.amount

    const existingItemCartItemIndex = state.items.findIndex(item => {
      return item.id === action.item.id
    })
    const existingCartItem = state.items[existingItemCartItemIndex]
    let updatedItems

    if (existingCartItem) { // if product already in the cart
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingItemCartItemIndex] = updatedItem
    }
    else {  // adding new product to the cart 
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item })
  }

  const removeCartItemHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeCartItemHandler,
  }

  return (
    <CartContext.Provider value={cartContext} >
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;

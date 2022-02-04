// Will be use to manage cart-context
import React from 'react';

import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemHandler = item => { }

  const removeCartItemHandler = id => { }

  const cartContext = {
    items: [],
    totalAmount: 0,
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

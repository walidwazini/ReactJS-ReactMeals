import React from 'react';

import classes from './Cart.module.css'

const Cart = props => {
  const cartItems = <ul className={classes['cart-items']} >{[
    { id: 'f1', name: 'Sushi', amount: 3, price: 12.40, }
  ].map(item => (
    <li>{item.name}</li>
  ))}</ul>

  return (
    <div>
      {cartItems}
      <div className={classes.total} >
        <span>Total Amount</span>
        <span>35.40</span>
      </div>
      <div>
        {/* <GamepadButton /> */}
        <button className={classes['button--alt']} >
          Close
        </button>
        <button className={classes.button} >
          Order
        </button>
      </div>
    </div>
  )
};

export default Cart;
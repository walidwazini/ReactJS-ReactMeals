import React, { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css'
import CartContext from '../../Store/cart-context';

const Cart = props => {
  const cartCtx = useContext(CartContext)

  // const dummyArray = [{ id: 'f1', name: 'Sushi', amount: 3, price: 10.00, }]
  const totalAmount = `RM ${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {

  }

  const cartItemAddHandler = (item) => {

  }

  const cartItems = (
    <ul className={classes['cart-items']} >
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id} name={item.name}
          amount={item.amount} price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={classes.total} >
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions} >
        {/* <GamepadButton /> */}
        <button className={classes['button--alt']} onClick={props.onClose} >
          Close
        </button>
        {
          hasItems && <button className={classes.button} >Order</button>
        }
      </div>
    </Modal>
  )
};

export default Cart;

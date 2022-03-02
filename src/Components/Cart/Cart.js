import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css'
import CartContext from '../../Store/cart-context';
import Checkout from './Checkout';
import { Fragment } from 'react/cjs/react.production.min';

const ordersUrl = 'https://react-http-7483e-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json'

const Cart = props => {
  const cartCtx = useContext(CartContext)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)

  // const dummyArray = [{ id: 'f1', name: 'Sushi', amount: 3, price: 10.00, }]
  const totalAmount = `RM ${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch(ordersUrl, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    })
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
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

  const modalActions = (
    <div className={classes.actions} >
      {/* <GamepadButton /> */}
      <button className={classes['button--alt']} onClick={props.onClose} >
        Close
      </button>
      {
        hasItems && <button className={classes.button} onClick={orderHandler} >
          Order
        </button>
      }
    </div>
  )

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total} >
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout
        onCancel={props.onClose}
        onConfirm={submitOrderHandler}
      />}
      {!isCheckout && modalActions}
    </Fragment>
  )

  const isSubmittingModalContent = <p>Sending order...</p>
  const didSubmitModalContent = (
    <Fragment>
      <p>Order was succesful!</p>
      <button className={classes.button} onClick={props.onClose} >
        Close
      </button>
    </Fragment>
  )
  return (
    <Modal onClose={props.onClose} >
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  )
};

export default Cart;

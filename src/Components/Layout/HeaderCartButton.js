import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/cart-context';

const HeaderCartButton = props => {
  const [btnHilighted, setBtnHilighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const numOfCartItems = cartCtx.items.reduce(
    (currNum, item) => {
      return currNum + item.amount
    }, 0
  )

  // const { items } = cartCtx

  const btnClasses = `${classes.button} 
  ${btnHilighted ? classes.bump : ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return
    }
    setBtnHilighted(true)
    const timer = setTimeout(() => {
      setBtnHilighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartCtx.items])


  return (
    <button className={btnClasses} onClick={props.onCLick} >
      <span className={classes.icon} >
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge} >
        {numOfCartItems}
      </span>
    </button>
  )
};

export default HeaderCartButton;

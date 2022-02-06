import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountRef = useRef()

  const submitHandler = (ev) => {
    ev.preventDefault()

    const enteredAmount = amountRef.current.value
    // Convert string num to number 
    const enteredAmountNumber = +enteredAmount
    if (
      enteredAmount.trim().length === 0
      || enteredAmountNumber < 1
      || enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return 
    } 

    props.onAddToCart(enteredAmountNumber)

  }
  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <Input label='Amount'
        ref={amountRef}
        input={{
          id: 'amount',
          type: 'number',
          min: '0',
          max: '5',
          step: '1',
          defaultValue: '0'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5) .</p>}
    </form>
  )
};

export default MealItemForm;

import React, { Fragment } from 'react';

import logo from './logo.svg';
import classes from './MyHeader.module.css'

// const headerBarContent = (<>

// </>)

const MyHeader = (props) => {
  return (
    <div className={classes.headerWrapper} >
      <div className={classes['title-wrapper']} >
        <img src={logo} className={classes['App-logo']}
          alt="logo"
        />
        <p style={{ fontWeight: 'bold', color: 'white' }} >
          React Meals
        </p>
      </div>
      <div className={classes.cartWrapper} >
        Cart
      </div>

    </div>
  )
};

export default MyHeader;

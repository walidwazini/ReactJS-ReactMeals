import React, { Fragment } from 'react';

import mealsHeader from '../../images/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header} >
        <h1>React Meals</h1>
        <HeaderCartButton onCLick={props.onShowCart} />
      </header>
      <div className={classes['main-image']} >
        <img src={mealsHeader} alt='headerMeal' />
      </div>
    </Fragment>
  )
};

export default Header;

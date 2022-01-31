import React from 'react';

import logo from '../images/logo.svg';
import classes from './Header.module.css'

const header_bar_style = {
  display: 'flex',
  flexDirection: 'row',
  // backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#262c38',
}

const headerBarContent = (<>
  <img src={logo} className={classes['App-logo']}
    alt="logo" style={{ height: '50px' }}
  />
  <p style={{ fontWeight: 'bold', color: 'white' }} >
    React Meals
  </p>
</>)

const Header = (props) => {
  return (
    <div style={header_bar_style}>
      {headerBarContent}
    </div>
  )
};

export default Header;

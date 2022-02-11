import React from 'react';
import MoodContext from './mood-context';

const MoodProvider = (props) => {
  return (
    <MoodContext.Provider>
      {props.children}
    </MoodContext.Provider>
  )
};

export default MoodProvider;

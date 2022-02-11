import React from 'react';

const moods = {
  happy: '😄',
  waiting: '😐',
  sad: '☹️',
}

const MoodContext = React.createContext(moods)

export default MoodContext
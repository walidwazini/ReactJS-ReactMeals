import React from 'react';

const moods = {
  happy: 'đ',
  waiting: 'đ',
  sad: 'âšī¸',
}

const MoodContext = React.createContext(moods)

export default MoodContext
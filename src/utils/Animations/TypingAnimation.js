// TypingAnimation.js
import React from 'react';
import useTypingAnimation from './TypingAnimationLogic';
import TypingAnimationStyles from './TypingAnimationStyles';

const TypingAnimation = () => {
  const phrases = ['Texto 1111111111111111111111111111', 'Texto 2', 'Texto 3'];
  const text = useTypingAnimation(phrases);

  return <div style={TypingAnimationStyles}>{text}</div>;
};

export default TypingAnimation;

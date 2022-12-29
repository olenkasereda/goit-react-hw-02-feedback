import React from 'react';
import './FeedbackOptions.module.css';

const FeedbackOptions = ({
  handleButtonGood,
  handleButtonNeutral,
  handleButtonBad,
}) => {
  return (
    <div>
      <button onClick={handleButtonGood}>Good</button>
      <button onClick={handleButtonNeutral}>Neutral</button>
      <button onClick={handleButtonBad}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;

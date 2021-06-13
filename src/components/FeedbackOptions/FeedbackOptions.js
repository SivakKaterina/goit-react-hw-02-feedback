import React from 'react';
import F from './FeedbackOptions.module.css'

const FeedbackOptions = ({onGood, onNeutral, onBad}) => (
  <div className={F.buttonContainer}>
    <button className={F.button} type='button' onClick={onGood}>Good</button>
    <button className={F.button} type='button' onClick={onNeutral}>Neutral</button>
    <button className={F.button} type='button' onClick={onBad}>Bad</button>
 </div>
)

export default FeedbackOptions;
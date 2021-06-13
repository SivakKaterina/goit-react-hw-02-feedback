import React from 'react';

import S from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total,positivePercentage}) => (
  <ul className={S.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
          </ul>
)

export default Statistics;
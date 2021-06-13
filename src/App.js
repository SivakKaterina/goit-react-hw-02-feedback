import React, { Component } from 'react';
import PropTypes from "prop-types";

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section'

import S from './components/Section/Section.module.css'

class App extends Component{

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
  good: 0,
  neutral: 0,
  bad: 0,
 }

  goodResponse = () => {
    this.setState(prevState => ({
       good:  prevState.good + 1,
    }))
  }

  neutralResponse = () => {
    this.setState(prevState => ({
       neutral:  prevState.neutral + 1,
    }))
  };

  badResponse = () => {
    this.setState(prevState => ({
       bad:  prevState.bad + 1,
    }))
   };

   countTotalFeedback() {
      const { good, neutral, bad } = this.state;
     return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad} = this.state;
     return Math.round(good / (good + neutral + bad) * 100);
  }

  render() {
    const total = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage() ? this.countPositiveFeedbackPercentage() : 0;
    
    return (
      <div className="container">
        <Section title={'Please leave feedback'} >
          <FeedbackOptions
          onGood={this.goodResponse}
          onNeutral={this.neutralResponse}
          onBad={this.badResponse} />
        </Section>
        
        <Section title={'Statistics'}>
           {total ?
        <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={totalPercentage}
        />
         : <h2 className={S.title}>No feedback given</h2>}
       </Section>
      </div> 
    )
  }
}

export default App;

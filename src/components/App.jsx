import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonGood = () => {
    console.log('Good button was clicked!'); // работает
    console.log('this.props: ', this.props); // работает
    this.setState(prevState => {
      console.log(prevState.good);
      return { good: prevState.good + 1 };
    });
  };

  handleButtonNeutral = () => {
    console.log('Neutral button was clicked!');
    this.setState(prevState => {
      console.log(prevState.neutral);
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleButtonBad = () => {
    console.log('Bad button was clicked!');

    this.setState(prevState => {
      console.log(prevState.bad);
      return { bad: prevState.bad + 1 };
    });
  };

  totalFeedback = () => {
    // let total = this.state.good + this.state.neutral + this.state.bad;
    // return total;
    return this.state.good + this.state.neutral + this.state.bad;
  };

  percentPositiveFeedback = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            handleButtonGood={this.handleButtonGood}
            handleButtonNeutral={this.handleButtonNeutral}
            handleButtonBad={this.handleButtonBad}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.totalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              percentPositive={this.percentPositiveFeedback()}
            />
          )}
        </Section>
      </>
    );
  }
}

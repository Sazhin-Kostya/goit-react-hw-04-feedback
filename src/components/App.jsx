import React, { Component } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Notification } from './Notification/Notification';
import { SectionTitle } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState['total'] + 1,
    }));
  };

  render() {
    return (
      <>
        <SectionTitle title={'Please leave feedback'} />
        <Buttons
          handleClick={this.handleClick}
          names={Object.keys(this.state)}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
        />
        <Notification
          message={'There is no feedback'}
          option={this.state.total}
        />
      </>
    );
  }
}

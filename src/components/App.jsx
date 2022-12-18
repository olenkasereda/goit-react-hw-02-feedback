import { Component } from 'react';

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
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleButtonBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1> Please leave feedback </h1>
        <button
          onClick={this.handleButtonGood}
          style={{
            width: '100px',
            height: '50px',
            display: 'inline-flex',
            margin: '25px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: 'black',
            backgroundColor: 'grey',
          }}
        >
          Good
        </button>
        <button
          onClick={this.handleButtonNeutral}
          style={{
            width: '100px',
            height: '50px',
            display: 'inline-flex',
            margin: '25px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: 'black',
            backgroundColor: 'grey',
          }}
        >
          Neutral
        </button>{' '}
        <button
          onClick={this.handleButtonBad}
          style={{
            height: '50px',
            width: '100px',
            display: 'inline-flex',
            margin: '25px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: 'black',
            backgroundColor: 'grey',
          }}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good} </p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad:{this.state.bad} </p>
        <p>Total:{this.state.good + this.state.neutral + this.state.bad} </p>
        <p>
          Positive feedback:
          {Math.round(
            (this.state.good * 100) /
              (this.state.good + this.state.neutral + this.state.bad)
          )}{' '}
          %{' '}
        </p>
      </div>
    );
  }
}

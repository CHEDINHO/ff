import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Muhammed Alp Arslan',
        bio: 'The Great Seljuk',
        imgSrc: 'https://admin.aa.com.tr/uploads/userFiles/88e4063b-7018-4331-b06e-f0cb513ac64c/2021%2F11%2Ftrt11.jpg',
        profession: 'The Second Seljuk Sultan'
      },
      show: false,
      timeElapsed: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  resetTimer = () => {
    this.setState({ timeElapsed: 0 });
  }

  toggleShow = () => {
    this.setState(prevState => {
      if (prevState.show) {
      
        this.resetTimer();
      } else {

        this.resetTimer();
      }
      return { show: !prevState.show };
    });
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow} className="toggle-button">
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} className="profile-img" />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <div className="timer">
          Time since profile shown: {timeElapsed} seconds
        </div>
      </div>
    );
  }
}

export default App;

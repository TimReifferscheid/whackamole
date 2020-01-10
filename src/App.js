import React from "react";
import Mole from "./Components/Mole";
import "./App.css";

class App extends React.Component {
  state = {
    moles: [
      { isMoleVisible: false },
      { isMoleVisible: false },
      { isMoleVisible: false },
      { isMoleVisible: false },
      { isMoleVisible: false },
      { isMoleVisible: false },
      { isMoleVisible: false },
      { isMoleVisible: false },
      { isMoleVisible: false }
    ],
    score: 0,
    remainingTime: 15
  };

  startGame = () => {
    this.startCountDown(this.state.remainingTime);
    setInterval(() => {
      this.setState({
        moles: this.getMoles()
      });
    }, 1500);
  };

  getMoles = () => {
    const moleArray = new Array(9).fill({}).map(() => {
      return { isMoleVisible: false };
    });
    const randomNumber = Math.floor(Math.random() * Math.floor(9));
    moleArray[randomNumber].isMoleVisible = true;
    return moleArray;
  };

  startCountDown = seconds => {
    let counter = seconds;
    const interval = setInterval(() => {
      counter--;
      this.setState({ remainingTime: counter });
      if (counter <= 0) {
        clearInterval(interval);
        alert("game Over! your Score is " + this.state.score);
      }
    }, 1000);
  };

  moleWhacked = () => {
    this.setState({
      moles: this.getMoles(),
      score: this.state.score + 1
    });
  };

  render() {
    const moles = this.state.moles.map((mole, index) => {
      return (
        <Mole
          key={`mole-${index}`}
          isVisible={mole.isMoleVisible}
          clicked={this.moleWhacked}
        />
      );
    });

    return (
      <div className="App">
        <h1>WHACK-A-Mole</h1>
        <h2>Score: {this.state.score}</h2>
        <p>Remaining Time: {this.state.remainingTime}</p>
        <button onClick={this.startGame}>Start Game</button>
        <div>{moles}</div>
      </div>
    );
  }
}

export default App;

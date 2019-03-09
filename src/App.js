import React, { Component } from "react";
import Shuffle from "shuffle-array";
import FriendCard from "./components/FriendCard";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";

import "./App.css";

//https://www.npmjs.com/package/shuffle-array

// var shuffle = require('shuffle-array'),
//     collection = [1,2,3,4,5];
// shuffle(collection);
// console.log(collection); // returns [4, 3, 1, 5, 2]


class App extends Component {

  // Set this.state
  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    clicked: [],
  };

  shuffleImages = () => {
    let shuffledFriends = Shuffle(friends);
    this.setState({ friends: shuffledFriends });
  };

  //The indexOf() method returns the position of the first occurrence of a specified value in a string.
  //This method returns -1 if the value to search for never occurs.
  getClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.keepScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
      console.log("Clicked id: " + id);
    } else {
      console.log("Sorry");
      this.resetGame();
    }
  };

  keepScore = () => {
    const newScore = this.state.currentScore + 1;

    this.setState({
      currentScore: newScore
    });
    console.log("New Score: " + newScore);

    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
      console.log("High Score: " + this.state.highScore);
    }

    else if (newScore === 12) {
      console.log("Perfect Score!");
      alert("Perfect Score!");
    }
    this.shuffleImages();
  };

  resetGame = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      clicked: [],

    });
    this.shuffleImages();
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Wrapper>
          <Jumbotron />
          <Header score={this.state.currentScore} highscore={this.state.highScore}></Header>

          {this.state.friends.map(friend => (
            <FriendCard
              key={friend.id}
              getClick={this.getClick}
              keepScore={this.keepScore}
              resetGame={this.resetGame}
              shuffleImages={this.shuffleImages}
              id={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

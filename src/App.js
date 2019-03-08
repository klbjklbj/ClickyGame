import React, { Component } from "react";
import Shuffle from "shuffle-array";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";


//https://www.npmjs.com/package/shuffle-array

// var shuffle = require('shuffle-array'),
//     collection = [1,2,3,4,5];
 
// shuffle(collection);
 
// console.log(collection); // returns [4, 3, 1, 5, 2]

var collection=[1,2,3,4,5];
Shuffle(collection);

console.log(collection);



class App extends Component {

  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };


  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Glaven!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = Shuffle(friends);
    this.setState({ friends: shuffledFriends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.friends.map(friend => (
          <FriendCard
            //imageClick={this.imageClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from "react";
import ClickCard from "./components/clickCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/title";
import possibleFriends from "./possibleFriends.json";
import shuffle from "./friendSorter";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    unchosenFriends: possibleFriends,
    score:0,
    highScore: 0
  };

  clickCard = id => {
    console.log(id);
    const origFriendLength = this.state.unchosenFriends.length;
    const friendsRemaining = this.state.unchosenFriends.filter(friend=>friend.id !== id);
    const newFriendLength = friendsRemaining.length
    const currentHighScore = this.state.highScore;
    console.log(origFriendLength, newFriendLength);
    if (origFriendLength !== newFriendLength){
      if (this.state.score >= currentHighScore){ 
    this.setState({
      unchosenFriends: friendsRemaining,
      score: this.state.score + 1,
      highScore: (currentHighScore + 1)
    })
  } else {
    this.setState({
      unchosenFriends: friendsRemaining,
      score: this.state.score + 1
    })
  } 
  }else if (origFriendLength === newFriendLength){
    alert('you have lost');
    this.setState({
      unchosenFriends: possibleFriends,
      score: 0
    })

  }

  };
 

  render() {
    let shuffledFriends = shuffle(possibleFriends);
    return (
      <Wrapper>
        <Title name= "Clicky Game" score={this.state.score} highScore = {this.state.highScore}>Clicky Game</Title>
        {shuffledFriends.map(friend =>(
          <ClickCard key = {friend.id} id={friend.id} name = {friend.name} image = {friend.image} onClick = {this.clickCard}>

          </ClickCard>
        ))}
        {/* {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))} */}
      </Wrapper>
    );
  }
}

export default App;

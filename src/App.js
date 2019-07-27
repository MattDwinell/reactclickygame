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
    clicked:[false, false, false, false, false, false, false, false, false, false, false, false],
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
    // if (origFriendLength === newFriendLength){
    //   console.log('user has lost');
    // } else {
    //   this.setState({score: (this.state.score + 1)});
    //   if (this.state.score > this.state.highScore){
    //     this.setState({
    //       highScore: this.state.score
    //     })
      
    //   //need to reshuffle cards here/ call reshuffle function
    // }  
    // }
//need to run some logic to determine if the id has been clicked or not, if false, then evaluate to true and run randomizer function. if true, game end/reset.

    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
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

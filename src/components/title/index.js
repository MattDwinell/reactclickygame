import React from "react";
import "./style.css";

function Title(props){
    return(
        <div  className="top-title">
        <h1>{props.name}</h1>
        <p> Click on as many unique pictures as you can, the game ends when you click the same picture twice.</p>
        <span classname="score">Current score: {props.score}</span>
        <span classname="high-score"> High score: {props.highScore}</span>
        </div>
    )
}
export default Title;
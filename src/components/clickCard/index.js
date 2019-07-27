import React from "react";
import "./style.css";

function ClickCard(props){
    return(
        <div className = "card" id={props.id}>
            <img className="card-img" alt="card_image" src={props.image}/>
        </div>
    )
}
export default ClickCard;
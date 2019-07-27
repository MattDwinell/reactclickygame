import React from "react";
import "./style.css";
import { tsPropertySignature } from "@babel/types";

function ClickCard(props){
    return(
        <div className = "card" id={props.id} onClick={() => props.onClick(props.id)} >
            <img className="card-img" alt="card_image" src={props.image}/>
        </div>
    )
}
export default ClickCard;
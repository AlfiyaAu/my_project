import React from "react";

export default function Order(props){

    return(
        <div className="item"> 
            <img src={"./images/"+ props.item2.img} alt="alt-txt"/>
            <h2> {props.item2.title}</h2>
            <b>{props.item2.price}</b>

        </div>
    );
}
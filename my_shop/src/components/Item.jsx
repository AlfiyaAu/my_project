import React from "react";

export default function Item (props){
    return(
        <div className="item">
            <img src={"./images/"+ props.item2.img} alt="alt-txt"/>
            <h2> {props.item2.title}</h2>
            <p>{props.item2.desk}</p>
            <b>{props.item2.price}</b>
            <div className="add-to-cart">+</div>

        </div>
    );
}
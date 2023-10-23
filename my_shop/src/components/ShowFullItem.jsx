import React from "react";

export default function ShowFullItem(props){
    return(
        <div className="full-item">
            <div>
                <img src={"./images/"+ props.item5.img} alt="alt-txt" onClick={()=>props.onShowItem(props.item5) }/>
                <h2> {props.item5.title}</h2>
                <p>{props.item5.desk}</p>
                <b>{props.item5.price}</b>
                <div className="add-to-cart" onClick={()=>props.onAdd(props.item5)}>+</div> 
            </div>     
        </div>
    );
}
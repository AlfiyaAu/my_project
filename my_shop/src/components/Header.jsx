import React from "react";
import {SlTrash} from "react-icons/sl"
import { useState } from "react";
import Order from "./Order";

export default function Header (props){

    let [cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className="logo"> My moda </span>

            <ul className="nav">
                <li> Про нас </li>
                <li> Контакты </li>
                <li> Личный кабинет </li>   
            </ul>
            <SlTrash onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-buttom ${cartOpen && "active"}`}/>
            
            {cartOpen && (
                <div className="shop-cart"> 
                    {props.orders2.map(el => (
                        <Order key={el.id} item2={el} />
                    ))}
                </div>
            )}

            </div>

            <div className="presentation">
            
            </div>
        </header>
    );
}
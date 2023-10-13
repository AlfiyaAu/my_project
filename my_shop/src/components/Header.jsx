import React from "react";
import {SlTrash} from "react-icons/sl"
import { useState } from "react";

export default function Header (){

    let [cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className="logo"> My moda </span>
            </div>

            <ul className="nav">
                <li> Про нас </li>
                <li> Контакты </li>
                <li> Личный кабинет </li>   
            </ul>
            <SlTrash onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-buttom ${cartOpen && "active"}`}/>

            <div className="presentation">
            
            </div>
        </header>
    );
}
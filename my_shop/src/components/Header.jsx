import React from "react";
import {SlTrash} from "react-icons/sl"
import { useState } from "react";
import Order from "./Order";

const showOrders=(props)=>{
    let summa=0;
    props.orders2.forEach(el=>summa +=Number.parseFloat(el.price))
    return(
        <div>
            {props.orders2.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className="summa">К оплате: {new Intl.NumberFormat().format(summa)} $</p>
        </div>
    );
}

const showNothing=()=>{
    return(
        <div className="empty">
            <h2>Товары в корзине отсутствуют</h2>            
        </div>
    );
}

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
                    {props.orders2.length> 0 ?
                        showOrders(props):showNothing()    
                    } 
                    
                </div>
            )}

            </div>

            <div className="presentation">
            
            </div>
        </header>
    );
}
import { useState } from "react";
import "./CartComponent.css"

function CartComponent(props) {


    return (
        <div className="cartContainer" style={props.style}>
            
        <span className="emptySpan">No product in Cart</span>

        {/* {props.cart.length > 0 
            ?
            props.cart.cart.map(eachItem => (
                <div className="eachCartItem" key={eachItem.itemNum}>
                    <img className="cartImgs" src={eachItem.itemImg} />
                    <div className="cartItemInfo">
                        <h2>{eachItem.itemName}</h2>
                        <p>${eachItem.itemPrice}.00</p>
                    </div>
                </div>      
            ))
            :
            <span className="emptySpan">No product in Cart</span>
        } */}
            
        </div>
    )
}

export default CartComponent;
import "./HeaderCart.css";

function HeaderCartInventory(props) {
    
    const carts = props.cart;

    return (
        <div className="cartContainer" style={props.style}>
            
        {
            carts.map(eachItem => (
                <div className="eachCartItem" key={eachItem.itemNum}>
                    <img className="cartImgs" src={eachItem.itemImg} />
                    <div className="cartItemInfo">
                        <h2>{eachItem.itemName}</h2>
                        <p>${eachItem.itemPrice}.00</p>
                    </div>
                </div>
            ))
        }

        <div className="priceInformation">
            <span>Subtotal: <span className="priceRow">$55.00</span></span>
        </div>
            
        </div>
    )
}

export default HeaderCartInventory;
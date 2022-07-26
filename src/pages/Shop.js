import Header from "../Components/Header";
import { Link } from "react-router-dom";
import "./Shop.css";
import flonaLogo from "../img/flonalogo.png";
import item1Img from "../img/flowers/product1.jpg";
import item2Img from "../img/flowers/product2.jpg";
import item3Img from "../img/flowers/product3.jpg";
import item4Img from "../img/flowers/product4.jpg";
import item5Img from "../img/flowers/product5.jpg";
import item6Img from "../img/flowers/product6.jpg";
import item7Img from "../img/flowers/product7.jpg";
import CartComponent from "../Components/CartComponent";
import { useState } from "react";
import WelcomePart from "./WelcomePart";
import Footer from "../Components/homepageComponents/Footer";

function Shop() {

    const [price1, setPrice1] = useState("30");
    const [price2, setPrice2] = useState("70");


    const shopProducts = [
        {
            itemNum: 1,
            itemImg: item1Img,
            itemName: "BACHELOR'S BUTTON",
            itemPrice: "55"
        },
        {
            itemNum: 2,
            itemImg: item2Img,
            itemName: "DESERT ROSE",
            itemPrice: "65"
        },
        {
            itemNum: 3,
            itemImg: item3Img,
            itemName: "GRAPE HYACINTH",
            itemPrice: "45"
        },
        {
            itemNum: 4,
            itemImg: item4Img,
            itemName: "PAINTED DAISY",
            itemPrice: "55"
        },
        {
            itemNum: 5,
            itemImg: item5Img,
            itemName: "ROSE OF SHARON",
            itemPrice: "45"
        },
        {
            itemNum: 6,
            itemImg: item6Img,
            itemName: "TEA ROSE",
            itemPrice: "35"
        },
        {
            itemNum: 7,
            itemImg: item7Img,
            itemName: "MORNING GLORY",
            itemPrice: "35"
        }
    ];

    const [filteredItemsArray, setFilteredItemsArray] = useState(shopProducts);

    const inventory = [];

    const [cartInventory, setCartInventory] = useState(inventory);

    return(
        <div className="ShopPage">
            <Header cart={cartInventory} />
            <WelcomePart PageName={"Shop"} />

            <section className="shopSection">
                <div className="shopContent">
                    <div className="shopFiltering">
                        <div className="cartInFilter">
                            <p>Shopping Cart</p>
                            <CartComponent style={{width: "100%", backgroundColor: "#eff4f3", border: "none", padding: "0", margin: "20px 0"}} cart={cartInventory} />
                        </div>
                        <div className="rangeInFilter">
                            <p>Price Filter</p>
                            <form className="filterForm">
                                <div>
                                    <input type="number" className="filterFrom" value={price1} onChange={(evt) => {
                                        setPrice1(evt.target.value)
                                    }}/>
                                    <span className="to"> - </span>
                                    <input type="number" className="filterTo" value={price2} onChange={(evt) => {
                                        setPrice2(evt.target.value)
                                    }}/>
                                </div>
                                <span className="filteredPriceSpan">Price: <span className="priceSpan price1">${price1}.00</span> — <span className="priceSpan price2">${price2}.00</span></span>
                                <button className="filterBtn" onClick={(evt) => {
                                    evt.preventDefault()
                                    setFilteredItemsArray(shopProducts.filter((item) => {
                                        let filteredItems = item.itemPrice > price1 && item.itemPrice < price2;
                                        return filteredItems;
                                    }))
                                }}>filter</button>
                            </form>
                        </div>


                        <div className="categoriesListDiv">
                            <p>Categories</p>
                            <div className="categoriesLists">
                                <li>Birthday Bouquets</li>
                                <li>Bride's Bouquets</li>
                                <li>Funeral Flowers</li>
                                <li>House Planting</li>
                                <li>Interior Decor</li>
                                <li>Wedding Decor</li>
                            </div>
                        </div>

                        <div className="productTagDiv">
                            <p>ProductTags</p>
                            <div className="ProductTags">
                                <div>bouquets</div>
                                <div>event</div>
                                <div>gift</div>
                                <div>joy</div>
                                <div>love</div>
                                <div>special</div>
                            </div>
                        </div>
                        

                    </div>

                    <div className="ProductsDiv">
                    {/* <span>Showing all {filteredItemsArray.length} results</span> */}
                        {filteredItemsArray.map((item) => (
                            <div className="EachProductItem" key={item.itemNum}>
                                <img src={item.itemImg}/>
                                <div className="EachProductItemContent">
                                    <h3>{item.itemName}</h3>
                                    <span>${item.itemPrice}.00</span>
                                    <button onClick={(evt) => {
                                        evt.preventDefault();
                                        setCartInventory(cartInventory.push(...cartInventory, item))
                                        alert(JSON.stringify(cartInventory))
                                    }}>Add to Card</button>
                                </div>
                            </div>
                                
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Shop;


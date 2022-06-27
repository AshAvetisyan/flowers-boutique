import "./HSection4Mech.css"
import product1Img from "../../img/flowers/product1.jpg";
import product2Img from "../../img/flowers/product2.jpg";
import product3Img from "../../img/flowers/product3.jpg";
import product4Img from "../../img/flowers/product4.jpg";
import product5Img from "../../img/flowers/product5.jpg";
import product6Img from "../../img/flowers/product6.jpg";

export default function HSection4Mech() {

    const flowers = [
        {
            N: 1,
            img: product1Img,
            name: "BACHELOR'S BUTTON",
            price: "$55.00",
        },
        {
            N: 2,
            img: product2Img,
            name: "DESERT ROSE",
            price: "$65.00"
        },
        {
            N: 3,
            img: product3Img,
            name: "GRAPE HYACINTH",
            price: "$45.00"
        },
        {
            N: 4,
            img: product4Img,
            name: "PAINTED DAISY",
            price: "$55.00"
        },
        {
            N: 5,
            img: product5Img,
            name: "ROSE OF SHARON",
            price: "$45.00"
        },
        {
            N: 6,
            img: product6Img,
            name: "TEA ROSE",
            price: "$35.00"
        }
    ]

    return(
        <div className="flowersAssort">
            {flowers.map(flower => (
               <div className="eachAssortFlower" key={flower.N}>
               <img src={flower.img} />
               <div className="assortContent">
                   <a href="#">{flower.name}</a>
                   <span>{flower.price}</span>
                   <button>add to card</button>
               </div>
               </div> 
            ))}



        </div>
    )

}

{/* <div className="eachAssortFlower">
<img src={product2Img} />
<div className="assortContent">
    <a href="#">TEA ROSE</a>
    <span>$35.00</span>
    <button>add to card</button>
</div>
</div> */}
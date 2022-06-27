import "./HomeSection2.css";
import linkPng from "../../img/link.png";

function HomeSection2() {

    const serviceInfo = [
        {
            N: 1,
            image:  'https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/service1-370x240.jpg',
            content:    "Wedding"
        },
        {
            N: 2,
            image:  'https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/service2-370x240.jpg',
            content:    "Birthday"
        },
        {
            N: 3,
            image:  'https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/service3-370x240.jpg',
            content:    "Custom Orders"
        }
    ]


    return (
        <section className="section2">
            <div className="adDiv">
                <div className="adContent">
                    <div>
                        <span>FREE next dey delievry when you order by 6pm</span>
                        <button>ORDER FLOWERS</button> 
                    </div>    
                </div>
            </div>

            <div className="serviceTypeDiv">
                <div className="serviceTypeContent">
                    {serviceInfo.map(function(service) {
                        return (
                            <div className="serviceTypes serviceType2" key={service.N}>
                                <div className="part1">
                                    <img className="mainImg" src={service.image}/>
                                    <div className="imgHover">
                                        <div className="radiusDiv">
                                            <img className="linkPng" src={linkPng}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="part2">
                                    <span>{service.content}</span>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
)
}

export default HomeSection2;
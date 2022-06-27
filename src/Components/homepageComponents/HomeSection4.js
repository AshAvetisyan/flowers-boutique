import "./HomeSection4.css";
import naghsh from "../../img/naghsh.png";
import HSection4Mech from "./HSection4Mech";

function HomeSection4() {
    return (
        <section className="section4">
            
            <div className="sec4part1">
                <div className="advantages">
                    <div className="EachAdvantage advatntage1">
                        <div className="atvantagePart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="atvantagePart2">
                            <a href="#">FREE DELIVERY</a>
                            <span>On every order, during the same day</span>
                        </div>
                    </div>
                    <div className="EachAdvantage advatntage2">
                        <div className="atvantagePart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="atvantagePart2">
                            <div className="forBorder">
                                <a href="#">HAND – TIED</a>
                                <span>bouquets and beautiful plants</span>
                            </div>
                        </div>
                    </div>
                    <div className="EachAdvantage advatntage3">
                        <div className="atvantagePart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="atvantagePart2">
                            <a href="#">EXCLUSIVE DESIGN</a>
                            <span>by the best florist from NYC</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec4part2">
                <div className="sec4part2Content">
                    <div className="sec4part2description">
                        <h1>Shop Our Latest Styles</h1>
                        <span>SHOP</span>
                        <img src={naghsh} />
                    </div>
                    <div className="sec4part2Main">
                        <HSection4Mech />
                    </div>
                </div>
            </div>

        </section>
    )
}


export default HomeSection4;
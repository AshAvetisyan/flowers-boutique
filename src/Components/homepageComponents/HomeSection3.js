import "./HomeSection3.css";
import welcomeImg from "../../../src/img/bg_welcome.jpg"
import SliderSection3 from "./Slider-section3/Slider";

function HomeSection3() {
    return(
        <section className="section3">
            <div className="backGround">
                <div className="sectionContent">
                    <div className="sec3Part1">
                        <div className="sec3Part1Content">
                            <img src={welcomeImg}></img>
                            <div>
                                <p>Welcome</p>
                                <h2>Hello! I am Luisa Green, a Florist from New York</h2>
                                <span>
                                Floristry can involve the cultivation of flowers as well as their arrangement, and to the business of selling them.
                                Much of the raw material supplied for the floristry trade comes from the cut flowers industry.
                                Florist shops are the main flower-only outlets, but supermarkets, garden supply stores also sell flowers.
                                </span>
                            </div>
                            <a href="#"><button>More About Me</button></a>
                        </div>
                    </div>
                
                    <div className="sec3Part2">
                        <SliderSection3 />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection3;
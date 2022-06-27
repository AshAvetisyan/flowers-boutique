import "./Header.css";
import squarelogo from '../img/squarePhone.svg';
import flonaLogo from '../img/flonalogo.png';
import bagLogo from '../img/bagShop.svg';
import { useState } from "react";
import HomePage from "../pages/Homepage";

function Header() {

    const [display1, setdisplay1] = useState(
        {
            display: "none",
            transition: "0.5s"
        }
    )

    const [display2, setdisplay2] = useState(
        {
            display: "none",
            transition: "0.5s",
            
        }
    )

    const [display3, setdisplay3] = useState(
        {
            display: "none",
            transition: "0.5s"
        }
    )

    const [display4, setdisplay4] = useState(
        {
            display: "none",
            transition: "0.5s"
        }
    )

    const [display5, setdisplay5] = useState(
        {
            display: "none",
            transition: "0.5s"
        }
    )

    return (
        <header>

            <div className="headTop"> 
                <div className="HeadCall">
                    <div className="callp1">
                        <span>Call Us</span>
                        <br/>
                        <a href="tel:800-123-4567">800-123-4567</a>
                    </div>
                    <div className="callp2">
                        <img src={squarelogo} />
                    </div>
                </div>
                <div className="HeadLogo">
                       <a href="../pages/Homepage.js"><img src={flonaLogo}/></a>
                </div>
                <div className="HeadCard">
                    <div className="shopp1">
                        <img src={bagLogo} />
                    </div>
                    <div className="shopp2">
                        <span>Your cart:</span>
                        <br/>
                        <span>(0) - $0.00</span>
                    </div>

                </div>
            </div>

            <div className="headBottom">
                <nav className="generalNav">
                    <ul className="generalUl">
                        <div className="dropdown1">
                         <li onMouseEnter={(display1) => {
                                setdisplay1(display1 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display1) => {
                                setdisplay1(display1 = {display: "none", transition: "0.5s"})
                            }}><a className="homeDrop" href="#">Home</a></li>

                            <div className="homeDroppedMenu"
                             style={display1}
                             onMouseEnter={(display1) => {
                                setdisplay1(display1 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display1) => {
                                setdisplay1(display1 = {display: "none", transition: "0.5s"})
                            }}>
                                <nav>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Home Boxed</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>    
                        
                        <div className="dropdown2">
                        <li onMouseEnter={(display2) => {
                                setdisplay2(display2 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display2) => {
                                setdisplay2(display2 = {display: "none", transition: "0.5s"})
                            }}><a href="#">About</a></li>

                            <div className="homeDroppedMenu2"
                             style={display2}
                             onMouseEnter={(display2) => {
                                setdisplay2(display2 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display2) => {
                                setdisplay2(display2 = {display: "none", transition: "0.5s"})
                            }}>
                                <nav>
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">features</a></li>
                                        <li><a href="#">Pages</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>


                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Team</a></li>

                        <div className="dropdown3">
                        <li onMouseEnter={(display3) => {
                                setdisplay3(display3 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display3) => {
                                setdisplay3(display3 = {display: "none", transition: "0.5s"})
                            }}><a href="#">Servces</a></li>

                        <div className="homeDroppedMenu3"
                             style={display3}
                             onMouseEnter={(display3) => {
                                setdisplay3(display3 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display3) => {
                                setdisplay3(display3 = {display: "none", transition: "0.5s"})
                            }}>
                                <nav>
                                    <ul>
                                        <li><a href="#">All services</a></li>
                                        <li><a href="#">Single service</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                        
                        <div className="dropdown4">
                        <li onMouseEnter={(display4) => {
                                setdisplay4(display4 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display4) => {
                                setdisplay4(display4 = {display: "none", transition: "0.5s"})
                            }}><a href="#">Portfolio</a></li>

                        <div className="homeDroppedMenu4"
                             style={display4}
                             onMouseEnter={(display4) => {
                                setdisplay4(display4 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display4) => {
                                setdisplay4(display4 = {display: "none", transition: "0.5s"})
                            }}>
                                <nav>
                                    <ul>
                                        <li><a href="#">Style Grid</a></li>
                                        <li><a href="#">Style cobbles</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>


                        <div className="dropdown5">
                        <li onMouseEnter={(display5) => {
                                setdisplay5(display5 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display5) => {
                                setdisplay5(display5 = {display: "none", transition: "0.5s"})
                            }}><a href="#">Blog</a></li>

                        <div className="homeDroppedMenu5"
                             style={display5}
                             onMouseEnter={(display5) => {
                                setdisplay5(display5 = {display: "block", transition: "0.5s"})
                            }}
                            onMouseLeave={(display5) => {
                                setdisplay5(display5 = {display: "none", transition: "0.5s"})
                            }}>
                                <nav>
                                    <ul>
                                        <li><a href="#">Classic Style</a></li>
                                        <li><a href="#">Masonry 2 <br/> Columns </a></li>
                                        <li><a href="#">Masonry 3 <br/> Columns</a></li>
                                        <li><a href="#">Masonry 2 <br/> Columns</a></li>
                                        <li><a href="#">Masonry 3 <br/> Columns</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>


                        <li><a className="alastChild" href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

    

}

export default Header;
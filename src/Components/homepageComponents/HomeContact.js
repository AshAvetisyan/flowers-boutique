import "./HomeContact.css";
import flonaLogo from '../../img/flonalogo.png';

function HomeContact() {


    return  (
        <section className="HomeContactSection">
            <div className="contactContent">
                <div className="homeContacts">
                    <div className="EachContact contact1">
                        <div className="contactPart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="contactPart2">
                            <p href="#">ADDRESS</p>
                            <span>123, New Lenox Chicago, IL 60606</span>
                        </div>
                    </div>
                    <div className="EachContact contact2">
                        <div className="contactPart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="contactPart2">
                            <div className="forBorder">
                                <p>PHONE</p>
                                <a href="tel:+1 800-123-4567">800-123-4567</a>
                            </div>
                        </div>
                    </div>
                    <div className="EachContact contact3">
                        <div className="contactPart1">
                            <div className="greenIcon"></div>
                        </div>
                        <div className="contactPart2">
                            <p>EMAIL ADDRESS</p>
                            <a href = "mailto: info@yoursite.com">info@yoursite.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footerDiv">
                    <a href="#"><img src={flonaLogo}/></a>
                    <div className="footerLinks">
                        <a href=""><div className="eachFooterLink"></div></a>
                        <a href=""><div className="eachFooterLink"></div></a>
                        <a href=""><div className="eachFooterLink"></div></a>
                        <a href=""><div className="eachFooterLink"></div></a>
                    </div>
                </div>
            </footer>
            <div className="privacyDiv">
                <span className="privacySpan">AncoraThemes © 2022. Terms of Use and Privacy Policy</span>
            </div>
        </section>
    )
}

export default HomeContact;
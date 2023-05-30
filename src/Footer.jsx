import { IoFastFoodSharp, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io5";
export default function footer(){
    return(
        <footer id="footer">    
            <div className="container footer-container">
                <div className="socials">
                    <div className="logo-socials">
                        <a href=""><IoLogoInstagram/></a>
                        <a href=""><IoLogoTwitter/></a>
                    </div>
                    <div className="header-logo">
                        <IoFastFoodSharp className="fast-food"/>
                        <h1>WECOOK</h1>
                    </div>
                    <div className="logo-socials">
                        <a href=""><IoLogoWhatsapp/></a>
                        <a href=""><IoLogoLinkedin/></a>
                    </div>
                </div>

                <div>
                    <ul className="socials social-links">
                       <li><a href="">Opportunities</a></li>
                       <li><a href="">Sign Up for rewards</a></li>
                       <li><a href="">Click to Subscribe</a></li>
                    </ul>
                </div>

                <div className=" copyright">
                    <p>&copy; WeCook. All Rights Reserved</p>
                    <div>
                        <a href="">Privacy Policy</a>
                        <a href="">Site by Davidarthur.tech</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
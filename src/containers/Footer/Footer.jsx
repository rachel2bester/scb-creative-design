import React from "react";
import "./Footer.scss";


const Footer = ({dark}) => {
    var footerClassName = dark ? "footer footer--dark" : "footer"

    return (
        <div className={footerClassName}>
            <div className="footer__text" >
                Footer text
            </div>
            
        </div>
    );
};

export default Footer;



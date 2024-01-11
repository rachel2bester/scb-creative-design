import React from "react";
import "./Footer.scss";
import LazyLoadText from "../../components/LazyLoadText/LazyLoadText";


const Footer = ({dark}) => {
    var footerClassName = dark ? "footer footer--dark" : "footer"

    return (
        <div className={footerClassName}>
            <LazyLoadText footer className={"footer__text"} text="Copyright © SCB CREATIVE DESIGN LIMITED. All rights reserved. Registered office: Unit 130 Image Court, 328-334 Molesey Rd, London, United Kingdom, KT12 3LT. Registered in England, Company Number: 15168233" />
            <LazyLoadText footer className={"footer__text"} text="Website Designed and Built by Rachel Bester" />
        </div>
    );
};

export default Footer;



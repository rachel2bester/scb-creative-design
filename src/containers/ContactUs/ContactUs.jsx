import React from "react";
import "./ContactUs.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";

const ContactUs = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="contact-us">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="contact-us__content">
                <MainHeading title="Contact Us"/>
            </div>
        </div>
    );
};

export default ContactUs;
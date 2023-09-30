import React from 'react'
import "./AboutUsPanel.scss"
import MenuPopup from '../../containers/MenuPopup/MenuPopup'
import desktopImg from "../../assets/images/desktop-image.WEBP";


const AboutUsPanel = ({ displayPopUp, toggleDisplayPopUp, closePopUp }) => {
    
    return (
        <div className="about-us">
            <div className="about-us__overlay"></div>
            <div className="about-us__main">
                
                <MenuPopup displayPopUp={displayPopUp} closePopUp={closePopUp} />
                
            </div>
        </div>
    )
}

export default AboutUsPanel;
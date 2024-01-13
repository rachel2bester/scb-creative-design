import React from 'react'
import "./LogoPanel.scss"
import desktopImg from "../../assets/images/desktop-image.WEBP";
import { useState} from 'react';
import LogoSVGwText from '../LogoSVGwText/LogoSVGwText';


const LogoPanel = ({ displayNavPopup, scrollY}) => {
    
    const [logoHeight, setLogoHeight] = useState(0)
    
    var logoMiddlePos = displayNavPopup ? window.innerHeight / 2 - scrollY / 2  - logoHeight / 2 + 130 : window.innerHeight / 2 - scrollY / 2  - logoHeight / 2 + 35;
    var logoPos;
    if (displayNavPopup) {
        logoPos = (logoMiddlePos > 260) ? logoMiddlePos : 260;
    } else {
        logoPos = (logoMiddlePos > 75) ? logoMiddlePos : 75;
    }


    return (
        <div className="logo-panel">
            <img src={desktopImg} className="logo-panel__img" alt="a living room" />
            <div className="logo-panel__overlay"></div>
            <div className="logo-panel__main">
                <LogoSVGwText setLogoHeight={setLogoHeight} className={"logo-panel__logo"} logoPos={logoPos}/>
            </div>
        </div>
    )
}

export default LogoPanel;
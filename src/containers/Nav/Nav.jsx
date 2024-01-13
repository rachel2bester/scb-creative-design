import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import CloseButton from '../../components/CloseButton/CloseButton';
import NavButtons from '../../components/NavButtons/NavButtons';
import LogoSVG from '../../components/LogoSVG/LogoSVG';
import "./Nav.scss"

const Nav = (props) => {
    const {toggleDisplayNavPopup, displayNavPopup, clear, closeNavPopup} = props;

    const location = useLocation();

    var navClassName;
    var navLogoClassName;
    var navBarsClassName;
    var navButtonsClassName;



    if (clear) {
        navClassName = "nav"
        navLogoClassName = "/" === location.pathname ? "nav__logo nav__logo--current" : "nav__logo";
        navBarsClassName = "nav__bars"
        navButtonsClassName = "nav__buttons"

    } else {
        navClassName = "nav nav--opaque"
        navLogoClassName = "/" === location.pathname ? "nav__logo nav__logo--opaque nav__logo--current" : "nav__logo nav__logo--opaque";
        navBarsClassName = "nav__bars nav__bars--opaque"
        navBarsClassName = "nav__bars nav__bars--opaque"
        navButtonsClassName = "nav__buttons nav__buttons--opaque"
    }
    return (
        <div className={navClassName}>
            <Link to="/" >
                <LogoSVG className={navLogoClassName} onClick={closeNavPopup}/>
            </Link>
            <div className={navButtonsClassName}>
                <NavButtons closeNavPopup={closeNavPopup}/>
            </div>
            
            {displayNavPopup 
                ? <CloseButton className={navBarsClassName} onClick={toggleDisplayNavPopup}/>
                : <svg viewBox="0 0 32 32" className={navBarsClassName} onClick={toggleDisplayNavPopup}>
                    <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"/>
                </svg>
            }
        </div>
    )
}

export default Nav
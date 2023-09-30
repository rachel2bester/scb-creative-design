import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./NavButton.scss"

const NavButton = (props) => {
    const {title, linkTo, closePopUp} = props;
    const location = useLocation();
    const className = (linkTo === location.pathname ? "nav-button nav-button--current" : "nav-button");
    
    return (
        <Link to={linkTo} className={className} onClick={closePopUp}> 
            {title}
        </Link>
  )
}

export default NavButton;
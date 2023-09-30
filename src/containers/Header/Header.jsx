import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import MenuPopup from "../MenuPopup/MenuPopup";

const Header = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;
    return (
        <>
            <Nav
                toggleDisplayPopUp={toggleDisplayPopUp}
                displayPopUp={displayPopUp}
                closePopUp={closePopUp}
                clear={false}
            />
            <div className="header__popup">
                <MenuPopup displayPopUp={displayPopUp} clear={false} closePopUp={closePopUp}/>
            </div>
            <div className="header__margin"></div>
        </>
    );
};

export default Header;

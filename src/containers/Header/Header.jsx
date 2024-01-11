import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import NavButtons from "../../components/NavButtons/NavButtons";

const Header = (props) => {
    const {toggleDisplayNavPopup, displayNavPopup, navClear, popupClear, closeNavPopup} = props;
    const popupClassName = popupClear ? "popup popup--clear" : "popup"
    const popupContentsClassName = popupClear ? "popup__contents popup__contents--clear" : "popup__contents"

    return (
        <>
            <Nav
                toggleDisplayNavPopup={toggleDisplayNavPopup}
                displayNavPopup={displayNavPopup}
                clear={navClear}
                closeNavPopup={closeNavPopup}
            />
            {displayNavPopup &&
                <div className={popupClassName}>
                    <div className={popupContentsClassName}>
                        <NavButtons closeNavPopup={closeNavPopup}/>
                    </div>          
                </div>
            }
        </>
    );
};

export default Header;

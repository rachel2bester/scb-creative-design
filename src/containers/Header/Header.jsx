import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import NavButtons from "../../components/NavButtons/NavButtons";

const Header = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp, navClear, popupClear} = props;

    const popupClassName = popupClear ? "popup popup--clear" : "popup"
    const popupContentsClassName = popupClear ? "popup__contents popup__contents--clear" : "popup__contents"


    return (
        <>
            <Nav
                toggleDisplayPopUp={toggleDisplayPopUp}
                displayPopUp={displayPopUp}
                closePopUp={closePopUp}
                clear={navClear}
            />
            {displayPopUp &&
                <div className={popupClassName}>
                    <div className={popupContentsClassName}>
                        <NavButtons closePopUp={closePopUp}/>
                    </div>          
                </div>
            }
        </>
    );
};

export default Header;

import React from "react";
import "./CorporateInteriors.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";

const CorporateInteriors = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="corporate-interiors">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="corporate-interiors__content">
                <MainHeading title="Corporate Interiors"/>
            </div>
        </div>
    );
};

export default CorporateInteriors;
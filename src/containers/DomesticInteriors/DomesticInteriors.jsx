import React from "react";
import "./DomesticInteriors.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";

const DomesticInteriors = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="domestic-interiors">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="domestic-interiors__content">
                <MainHeading title="Domestic Interiors"/>
            </div>
        </div>
    );
};

export default DomesticInteriors;
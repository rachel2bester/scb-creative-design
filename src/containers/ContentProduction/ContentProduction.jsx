import React from "react";
import "./ContentProduction.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";

const ContentProduction = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="content-production">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="content-production__content">
                <MainHeading title="Content Production"/>
            </div>
        </div>
    );
};

export default ContentProduction;
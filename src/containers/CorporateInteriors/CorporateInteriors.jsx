import React from "react";
import "./CorporateInteriors.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";
import Footer from "../Footer/Footer";

const CorporateInteriors = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <>
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp} navClear={false} popupClear={false}/>
            <div className="corporate-interiors">
                <MainHeading title="Corporate Interiors"/>
                <div className="corporate-interiors__content"></div>
                <Footer dark={true}/>
            </div>
            
            
        </>
    );
};

export default CorporateInteriors;
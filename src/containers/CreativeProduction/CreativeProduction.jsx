import React from "react";
import "./CreativeProduction.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";
import CreativeProductionIntro from "../../components/CreativeProductionIntro/CreativeProductionIntro";
import Services from "../../components/Services/Services";
import Footer from "../Footer/Footer";



const CreativeProduction = (props) => {
    const {toggleDisplayNavPopup, displayNavPopup, closeNavPopup} = props;
    window.scrollTo(0,0); 

    return (
        <div className="creative-production">
            <Header displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} navClear={false} popupClear={false} closeNavPopup={closeNavPopup}/>
            <div className="creative-production__content">
                <div className="creative-production__content__title">
                    <MainHeading title="Creative Content and Event Production" white addedClass='creative-production__content__title__text'/>
                </div>
                <CreativeProductionIntro />
                <Services />
                <Footer dark/>
            </div>
        </div>
    );
};

export default CreativeProduction;



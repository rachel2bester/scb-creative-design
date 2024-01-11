import React from "react";
import "./CreativeProduction.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";
import CreativeProductionIntro from "../../components/CreativeProductionIntro/CreativeProductionIntro";
import Services from "../../components/Services/Services";
import Footer from "../Footer/Footer";



const CreativeProduction = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="creative-production">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="creative-production__content">
                <div className="creative-production__content__title">
                    <MainHeading title="Creative Content and Event Production" white/>
                </div>
                <CreativeProductionIntro />
                <Services />
                <Footer dark/>
            </div>
            
            
        </div>
    );
};

export default CreativeProduction;



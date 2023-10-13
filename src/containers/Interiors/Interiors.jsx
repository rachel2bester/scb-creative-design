import React from "react";
import "./Interiors.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";
import Footer from "../Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import PhotoPanel from "../PhotoPanel/PhotoPanel";

const Interiors = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <>
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp} navClear={false} popupClear={false}/>
            <SideBar dark={false}/>
            <div className="interiors"> 
                <div className="interiors__content">
                    <PhotoPanel />
                    <Footer dark={true}/>
                </div>
                
            </div> 
        </>
    );
};

export default Interiors;
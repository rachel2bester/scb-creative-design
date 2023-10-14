import React from "react";
import "./Interiors.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";
import Footer from "../Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import PhotoPanel from "../PhotoPanel/PhotoPanel";
import { useState } from "react";

const Interiors = (props) => {
    const { toggleDisplayNavPopUp, displayNavPopup} = props;
    
    const [displayPhotoPopup, setDisplayPhotoPopup] = useState(true);
    document.body.style.overflow = "hidden"

    const toggleDisplayPhotoPopup = () => {
        setDisplayPhotoPopup(!displayPhotoPopup);
    };

    return (
        <div className="interiors"> 
        
            <Header displayNavPopup={displayNavPopup} toggleDisplayNavPopUp={toggleDisplayNavPopUp} navClear={false} popupClear={false}/>
            <SideBar dark={displayPhotoPopup}/>
        
            <div className="interiors__content">
                <PhotoPanel toggleDisplayPhotoPopup={toggleDisplayPhotoPopup} displayPhotoPopup={displayPhotoPopup}/>
                <Footer dark={true}/>
            </div>
            
        </div> 
    );
};

export default Interiors;
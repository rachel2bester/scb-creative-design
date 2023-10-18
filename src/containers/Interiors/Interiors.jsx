import React from "react";
import "./Interiors.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";
import Footer from "../Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import PhotoPanel from "../PhotoPanel/PhotoPanel";
import { useState } from "react";

const Interiors = (props) => {
    const { toggleDisplayNavPopUp, displayNavPopup, projects} = props;
    const [projectIndex, setProjectIndex] = useState(null); 
    const [imageIndex, setImageIndex] = useState(null); 

    const displayPhotoPopup = (imageIndex != null && projectIndex != null)
    const project = projects[projectIndex]

    const incrementImageIndex = () => {
        if (imageIndex >= project.images.length - 1) {
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex + 1)
        }
    }

    const decrementImageIndex = () => {
        if (imageIndex <= 0) {
            setImageIndex(project.images.length - 1)
        } else {
            setImageIndex(imageIndex - 1)
        }
    }



    const closePhotoPopup = () => {
        setProjectIndex(null)
        setImageIndex(null)
    };

    const onPhotoClick = event => {
        const idSplit = event.target.id.split("_")
        setProjectIndex(parseInt(idSplit[1]))
        setImageIndex(parseInt(idSplit[2]))
        console.log(event.target.id)
    };

    const displayedImages = [];
    projects.forEach((project, projectIndex) => {
        project.images.forEach((image, imageIndex) => {
            if (image.displayOnMain) {
                image['projectIndex'] = projectIndex;
                image['imageIndex'] = imageIndex;
                displayedImages.push(image)
            }
        })
    });

    return (
        <div className="interiors"> 
            <Header displayNavPopup={displayNavPopup} toggleDisplayNavPopUp={toggleDisplayNavPopUp} navClear={false} popupClear={false}/>
            <SideBar dark={displayPhotoPopup} project={project}/>
        
            <div className="interiors__content">
                <PhotoPanel 
                    currentImageIndex={imageIndex} 
                    closePhotoPopup={closePhotoPopup} 
                    displayPhotoPopup={displayPhotoPopup} 
                    onPhotoClick={onPhotoClick} 
                    displayedImages={displayedImages} 
                    incrementImageIndex={incrementImageIndex}
                    decrementImageIndex={decrementImageIndex}
                    project={project}
                />
                <Footer dark={true}/>
            </div>
            
        </div> 
    );
};

export default Interiors;
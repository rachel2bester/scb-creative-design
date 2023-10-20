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
    const [displaySideBar, setDisplaySideBar] = useState(false); 

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

    const incrementProjectIndex = () => {
        setImageIndex(0)
        if (projectIndex >= projects.length - 1) {
            setProjectIndex(0)
        } else {
            setProjectIndex(projectIndex + 1)
        }
    }

    const decrementProjectIndex = () => {
        setImageIndex(0)
        if (projectIndex <= 0) {
            setProjectIndex(projects.length - 1)
        } else {
            setProjectIndex(projectIndex - 1)
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
            {displaySideBar &&
                <SideBar 
                    dark={displayPhotoPopup} 
                    project={project} 
                    incrementProjectIndex={incrementProjectIndex}
                    decrementProjectIndex={decrementProjectIndex}
                />
            }
        
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
                    projectIndex={projectIndex}
                />
                <Footer dark={true}/>
            </div>
            
        </div> 
    );
};

export default Interiors;
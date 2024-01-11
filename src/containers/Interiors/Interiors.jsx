import React from "react";
import "./Interiors.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";
import Footer from "../Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import PhotoPanel from "../PhotoPanel/PhotoPanel";
import { useState } from "react";

const Interiors = (props) => {
    const { toggleDisplayNavPopup, displayNavPopup, projects, closeNavPopup} = props;
    const [projectIndex, setProjectIndex] = useState(null); 
    const [imageIndex, setImageIndex] = useState(null); 
    const [displaySideBar, setDisplaySideBar] = useState(true); 

    var sideBarButtonClassName;

    const displayPhotoPopup = (imageIndex != null && projectIndex != null)
    const interiorsClassName = (displaySideBar ? "interiors" : "interiors interiors--no-sidebar") + (displayPhotoPopup ? " interiors--dark": "")

    const project = projects[projectIndex]

    if (!displaySideBar) {
        sideBarButtonClassName = displayPhotoPopup ? "interiors__sidebar-button interiors__sidebar-button--show interiors__sidebar-button--dark" : "interiors__sidebar-button interiors__sidebar-button--show"
    } else {
        sideBarButtonClassName = displayPhotoPopup ? "interiors__sidebar-button interiors__sidebar-button--hide interiors__sidebar-button--dark" : "interiors__sidebar-button interiors__sidebar-button--hide"
    }

    const toggleDisplaySideBar = () => {
        setDisplaySideBar(!displaySideBar)
    }

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

    const onPhotoClick = (event, sidebar) => {
        const idSplit = event.target.id.split("_")
        setProjectIndex(parseInt(idSplit[1]))
        setImageIndex(parseInt(idSplit[2]))
        if (sidebar) {
            setDisplaySideBar(true)
        }  
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
        <div className={interiorsClassName}> 
            <Header displayNavPopup={displayNavPopup} closeNavPopup={closeNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} navClear={false} popupClear={false}/>
            
            <SideBar 
                dark={displayPhotoPopup} 
                displaySideBar={displaySideBar}
                project={project} 
                incrementProjectIndex={incrementProjectIndex}
                decrementProjectIndex={decrementProjectIndex}
                toggleDisplaySideBar={toggleDisplaySideBar}
            />

            <div className={sideBarButtonClassName} onClick={toggleDisplaySideBar}>           
                <svg viewBox="0 0 24 24">
                    <path d="M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z" />
                </svg> 
            </div>
        
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
                    displaySideBar={displaySideBar}
                />
                <Footer dark={true}/>
            </div>
            
        </div> 
    );
};

export default Interiors;
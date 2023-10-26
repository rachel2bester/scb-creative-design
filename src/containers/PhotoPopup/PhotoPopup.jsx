import React from "react";
import CloseButton from "../../components/CloseButton/CloseButton";
import "./PhotoPopup.scss";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";



const PhotoPopup = ({closePhotoPopup, project, currentImageIndex, incrementImageIndex, decrementImageIndex, onPhotoClick, projectIndex, displaySideBar}) => {
    
    const closeClassName = displaySideBar ? "photo-popup__close photo-popup__close--hidden" : "photo-popup__close";

    return (
        <div className="photo-popup">
            <div className="photo-popup__overlay"></div>
            <CloseButton className={closeClassName} onClick={closePhotoPopup}/>
            <PhotoCarousel 
                images={project.images}
                currentImageIndex={currentImageIndex}
                incrementImageIndex={incrementImageIndex}
                decrementImageIndex={decrementImageIndex}
                onPhotoClick={onPhotoClick}
                projectIndex={projectIndex}
                displaySideBar={displaySideBar}
            />
        </div>
    );
};

export default PhotoPopup;



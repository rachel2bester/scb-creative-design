import React from "react";
import CloseButton from "../../components/CloseButton/CloseButton";
import "./PhotoPopup.scss";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";



const PhotoPopup = ({closePhotoPopup, project, currentImageIndex, incrementImageIndex, decrementImageIndex, onPhotoClick, projectIndex}) => {
    
    return (
        <div className="photo-popup">
            <div className="photo-popup__overlay"></div>
            <CloseButton className={"photo-popup__close"} onClick={closePhotoPopup}/>
            <PhotoCarousel 
                images={project.images}
                currentImageIndex={currentImageIndex}
                incrementImageIndex={incrementImageIndex}
                decrementImageIndex={decrementImageIndex}
                onPhotoClick={onPhotoClick}
                projectIndex={projectIndex}
            />
            
        </div>
    );
};

export default PhotoPopup;



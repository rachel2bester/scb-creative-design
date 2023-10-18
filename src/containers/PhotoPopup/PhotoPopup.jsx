import React from "react";
import CloseButton from "../../components/CloseButton/CloseButton";
import PhotoBar from "../../components/PhotoBar/PhotoBar";
import "./PhotoPopup.scss";



const PhotoPopup = ({closePhotoPopup, project, currentImageIndex, incrementImageIndex, decrementImageIndex, onPhotoClick}) => {

    const image = project.images[currentImageIndex]

    return (
        <div className="photo-popup">
            <div className="photo-popup__overlay"></div>
            <CloseButton className={"photo-popup__close"} onClick={closePhotoPopup}/>
            <div className="photo-popup__grid">
                <div className='photo-popup__grid__container'>
                    <svg 
                        onClick={decrementImageIndex}
                        className="photo-popup__grid__container__arrow"
                        viewBox="0 0 330 330"
                    >
                        <path  d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                            l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                            C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z" />
                    </svg>
                    <img src={image.imgSrc} alt="fill in later" className='photo-popup__grid__container__img'/>
                    <svg 
                        onClick={incrementImageIndex}
                        className="photo-popup__grid__container__arrow"
                        viewBox="0 0 330 330"
                    >
                        <path transform="scale (-1, 1)" transform-origin="center" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                            l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                            C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z" />
                    </svg>
                </div>
                <PhotoBar images={project.images} onPhotoClick={onPhotoClick}/>
            </div>
            
        </div>
    );
};

export default PhotoPopup;



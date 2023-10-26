import React from "react";
import PhotoBar from "../../components/PhotoBar/PhotoBar";
import "./PhotoCarousel.scss";

const PhotoCarousel = ({ images, incrementImageIndex, decrementImageIndex, onPhotoClick, currentImageIndex, projectIndex, displaySideBar}) => {
    const image = images[currentImageIndex]
    const arrowClassName = displaySideBar ? "carousel__container__arrow carousel__container__arrow--hidden" : "carousel__container__arrow";

    return (
        <div className="carousel">
            <div className='carousel__container'>
                
                <svg 
                    onClick={decrementImageIndex}
                    className={arrowClassName}
                    viewBox="0 0 330 330"
                >
                    <path  d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                        l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                        C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z" />
                </svg>
                <div className="carousel__container__img-container">
                    <img src={image.imgSrc} alt={image.alt} className='carousel__container__img-container__img'/>
                </div>
                <svg 
                    onClick={incrementImageIndex}
                    className={arrowClassName}
                    viewBox="0 0 330 330"
                >
                    <path transform="scale (-1, 1)" transform-origin="center" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                        l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                        C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z" />
                </svg>
            </div>
            <PhotoBar images={images} currentImageIndex={currentImageIndex} onPhotoClick={onPhotoClick} projectIndex={projectIndex}/>
        </div>
    );
};

export default PhotoCarousel;
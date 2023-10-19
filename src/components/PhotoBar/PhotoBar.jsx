import React from 'react'
import "./PhotoBar.scss"
import { useEffect } from 'react';


const PhotoBar = ({images, currentImageIndex, onPhotoClick, projectIndex}) => {

    const imagesJSX = images.map((image, index) => {
        const className = (index == currentImageIndex) ? 'photo-bar__photo photo-bar__photo--selected' : 'photo-bar__photo' 
        return (
            <img 
                src={image.imgSrc} 
                alt={image.alt} 
                className={className} 
                key={"img_bar_" + index}
                id={"img-bar_" + projectIndex + "_" + index}
                onClick={onPhotoClick}
            />
        )
    })
    
    return (
        <div className="photo-bar">
            {imagesJSX}
        </div>
    )
}

export default PhotoBar;
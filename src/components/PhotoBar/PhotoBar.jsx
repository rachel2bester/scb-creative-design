import React from 'react'
import "./PhotoBar.scss"


const PhotoBar = (images, currentImageIndex, onPhotoClick) => {
    console.log(typeof images)

    const imagesJSX = images.map((image, index) => {
        return (
            <img 
                    src={image.imgSrc} 
                    alt={image.alt} 
                    className='photo-panel__content__photo' 
                    key={"img_bar_" + image.currentImageIndex}
                    id={"img_" + image.projectIndex + "_" + image.currentImageIndex}
                    onClick={onPhotoClick}
                />
        )
    })
    
    return (
        <div className="photo-bar">

        </div>
    )
}

export default PhotoBar;
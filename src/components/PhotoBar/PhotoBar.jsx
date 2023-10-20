import React from 'react'
import "./PhotoBar.scss"
import { useEffect, useRef } from 'react';


const PhotoBar = ({images, currentImageIndex, onPhotoClick, projectIndex}) => {
    

    const textRef = useRef()
    const imagesJSX = images.map((image, index) => {
        const className = (index == currentImageIndex) ? 'photo-bar__photo photo-bar__photo--selected' : 'photo-bar__photo'
        const ref = (index == currentImageIndex) ? textRef : null;
        return (
            <img 
                src={image.imgSrc} 
                alt={image.alt} 
                className={className} 
                key={"img_bar_" + index}
                id={"img-bar_" + projectIndex + "_" + index}
                onClick={onPhotoClick}
                ref={ref}
            />
        )
    })

    

    
    useEffect(() => {          
        const myElement = document.getElementsByClassName('photo-bar__photo--selected')[0];
        console.log(document.getElementsByClassName('photo-bar__photo--selected'))

        var topPos = myElement.offsetLeft;
        document.getElementById('photo-bar').scrollLeft = topPos;
    }, [currentImageIndex]);


    
    return (
        <div className="photo-bar" id='photo-bar'>
            {imagesJSX}
        </div>
    )
}

export default PhotoBar;
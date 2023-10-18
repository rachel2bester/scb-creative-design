import React from "react";
import LazyLoadImg from "../../components/LazyLoadImg/LazyLoadImg";
import "./PhotoPanel.scss";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import PhotoPopup from "../PhotoPopup/PhotoPopup";
import { useEffect, useState} from "react";



const PhotoPanel = ({closePhotoPopup, displayPhotoPopup, displayedImages, onPhotoClick, currentImageIndex, project, incrementImageIndex, decrementImageIndex}) => {

    const [displayedImagesJSX, setDisplayedImagesJSX] = useState(0);
    
    useEffect(() => {
        setDisplayedImagesJSX(displayedImages.map((image) => {
            return (
                <LazyLoadImg 
                    imgSrc={image.imgSrc} 
                    alt={image.alt} 
                    className='photo-panel__content__photo' 
                    key={"img_" + image.projectIndex + "_" + image.imageIndex}
                    id={"img_" + image.projectIndex + "_" + image.imageIndex}
                    onClick={onPhotoClick}
                />
            )
        }).sort((a, b) => 0.5 - Math.random()))
      }, []);

    

    return (
        <>
        {
            displayPhotoPopup && 
                <PhotoPopup closePhotoPopup={closePhotoPopup} project={project} currentImageIndex={currentImageIndex} incrementImageIndex={incrementImageIndex} decrementImageIndex={decrementImageIndex} onPhotoClick={onPhotoClick}/>
        }

        <div className="photo-panel">
            <ResponsiveMasonry
                className="photo-panel__content"
                
                columnsCountBreakPoints={{100: 1, 750: 2, 950: 3, 1200: 4}}
            >
                <Masonry gutter={"20px"}>
                    {displayedImagesJSX}
                </Masonry>
            </ResponsiveMasonry >
            
        </div>
        </>
    );
};

export default PhotoPanel;



import React from "react";
import LazyLoadImg from "../../components/LazyLoadImg/LazyLoadImg";
import "./PhotoPanel.scss";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import PhotoPopup from "../PhotoPopup/PhotoPopup";



const PhotoPanel = ({displayPhotoPopup, toggleDisplayPhotoPopup}) => {


    

    return (
        <>
        {
            displayPhotoPopup && 
                <PhotoPopup toggleDisplayPhotoPopup={toggleDisplayPhotoPopup}/>
        }

        <div className="photo-panel">

            
            <ResponsiveMasonry
                className="photo-panel__content"
                
                columnsCountBreakPoints={{100: 1, 750: 2, 950: 3, 1200: 4}}
            >
                <Masonry gutter={"20px"}>
                    <LazyLoadImg imgSrc="http://placekitten.com/900/600" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/300/400" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/600" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/900" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/500/450" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/400" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/200/300" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/800/300" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/900/600" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/400/400" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/350/400" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/200/300" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/700" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/900" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/250/200" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/600" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/500/400" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/300/400" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/900/600" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/300/400" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/600" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/900" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/500/450" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/600/400" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/200/300" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/800/300" alt="fill in later" className='photo-panel__content__photo'/>
                    <LazyLoadImg imgSrc="http://placekitten.com/900/600" alt="fill in later" className='photo-panel__content__photo'/>
                </Masonry>
            </ResponsiveMasonry >
            
        </div>
        </>
    );
};

export default PhotoPanel;



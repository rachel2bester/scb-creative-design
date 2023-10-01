import React from 'react'
import "./LazyLoadImg.scss"
import { Controller, Scene } from 'react-scrollmagic';



const LazyLoadImg = ({imgSrc, alt, className}) => {
    
    return (<>
            <Controller>
                <Scene classToggle="img--visible" indicators={true} offset={-window.innerHeight/2 + 50}>
                    <img src={imgSrc} className={'img ' + className} alt={alt}/>
                </Scene>
            </Controller>
        </>
    )
}

export default LazyLoadImg;
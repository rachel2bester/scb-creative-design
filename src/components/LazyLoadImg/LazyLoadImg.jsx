import React from 'react'
import "./LazyLoadImg.scss"
import { Controller, Scene } from 'react-scrollmagic';



const LazyLoadImg = ({imgSrc, alt, className, onClick, id}) => {
    
    return (<>
            <Controller>
                <Scene classToggle="img--visible" offset={-window.innerHeight/2 + 50}>
                    <img src={imgSrc} className={'img ' + className} alt={alt} id={id} onClick={onClick}/>
                </Scene>
            </Controller>
        </>
    )
}

export default LazyLoadImg;
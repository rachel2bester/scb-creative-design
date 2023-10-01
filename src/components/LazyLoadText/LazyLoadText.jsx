import React from 'react'
import "./LazyLoadText.scss"
import { Controller, Scene } from 'react-scrollmagic';



const LazyLoadText = ({imgSrc, alt, className}) => {
    
    return (<>
            <Controller>
                <Scene classToggle="img--visible" indicators={true} offset={-window.innerHeight/2 + 50}>
                    <div></div>
                </Scene>
                
            </Controller>
        </>
    )
}

export default LazyLoadText;
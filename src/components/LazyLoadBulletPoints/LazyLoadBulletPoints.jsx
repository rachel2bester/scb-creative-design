import React from 'react'
import "./LazyLoadBulletPoints.scss"
import { Controller, Scene } from 'react-scrollmagic';



const LazyLoadBulletPoints = ({points, containerClass, pointClass }) => {
    const pointsJSX = points.map((text) =>{
        return (
            <Scene classToggle="container__point--visible" offset={-window.innerHeight/2 + 50}>
                <li className={"container__point " + pointClass}> 
                    {text}
                </li> 
            </Scene>
        )
    })
    
    return (<>
            <Controller>
                <ul className={"container " + containerClass}>
                    {pointsJSX}
                </ul>
            </Controller>
        </>
    )
}

export default LazyLoadBulletPoints;
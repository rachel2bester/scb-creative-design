import React from 'react'
import "./CreativeProductionIntro.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import { Controller, Scene } from 'react-scrollmagic';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import LazyLoadText from '../LazyLoadText/LazyLoadText';
import LazyLoadBulletPoints from '../LazyLoadBulletPoints/LazyLoadBulletPoints';




const CreativeProductionIntro = ({ displayPopUp, toggleDisplayPopUp, closePopUp }) => {
    
    return (
        <div className="intro">
            <div className='intro__container'>  
                <LazyLoadText text={
                        "At SCB we specialise in delivering top-tier production services across a spectrum of creative ventures, spanning Film, TV, Theatre, and Events. Our expertise extends to planning film shoots. We utilise our established interior design skills and contractor networks for production design. We also, enjoy contributing to established event and creative projects, all while delivering finished products at the highest standard for our clients."
                }/>

                
            </div>
        </div>
    )
}

export default CreativeProductionIntro;
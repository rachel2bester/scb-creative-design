import React from 'react'
import "./AboutUs.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import { Controller, Scene } from 'react-scrollmagic';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import LazyLoadText from '../LazyLoadText/LazyLoadText';
import LazyLoadBulletPoints from '../LazyLoadBulletPoints/LazyLoadBulletPoints';




const AboutUs = ({ displayPopUp, toggleDisplayPopUp, closePopUp }) => {
    
    return (
        <div className="about-us">
            <SectionHeading title="About Us"/>
            <div id='about-us' />
            <div className='about-us__container'>  
                <div className='about-us__container__text'>
                    <LazyLoadText text={
                        <><b>Welcome to SCB Creative Design & Production</b> - we specialise in two creative fields:</>
                    }/>

                    <LazyLoadBulletPoints 
                        points={[
                            "Crafting skilled and exquisite client-centred interior design, for both domestic and corporate environments.",
                            "Producing compelling, creative content and events."
                        ]}
                    />
                    
                    <LazyLoadText text={
                        <>Essentially, we are passionate about transforming your creative desires into tangible, awe-inspiring realities. At the core of our mission is the seamless fusion of <b>Spectacular Creativity, Skilled Organisation</b> and <b>Project Management</b>. A mother and son team that takes on projects of all sizes, we invite you to explore our website and get a glimpse into a world where creativity meets precision, and where every project is a testament to our dedication to turning ideas into remarkable realities.</>
                    }/>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
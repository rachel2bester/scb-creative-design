import React from 'react'
import "./AboutUs.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import { Controller, Scene } from 'react-scrollmagic';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';



const AboutUs = ({ displayPopUp, toggleDisplayPopUp, closePopUp }) => {
    
    return (
        <div className="about-us">
            <SectionHeading title="About Us"/>
            

               
            <div id='about-us' />
            <div className='about-us__container'>  
                <LazyLoadImg imgSrc="http://placekitten.com/900/600" alt="fill in later" className='about-us__container__img'/>
                <div className='about-us__container__text'>
                    <div >
                        A Creative Production company marrying two interrelated skills: Spectacular Creativity with Skilled Organisation and Project Management. This company specialises in fostering creativity to deliver high-quality projects. Realising the fundamental necessity of organisation and planning to best harness artistry. SCB Creative will offer services in Creative Project Management, wedding the right people (from the UK and South Africa) with the right planning to fulfil our clients creative and budgetary needs by telling their stories.
                    </div>
                    <div>
                        Specialising in bringing visions to life through planning, creative writing, designing, and managing we will seek to bring multiple strands under one umbrella. Using our collective skill we will work primarily in two interrelated specialisms- the production of stunning interiors (domestic and corporate) and the production of powerful creative content! 
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default AboutUs;
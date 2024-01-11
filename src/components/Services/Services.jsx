import React from 'react'
import "./Services.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import { Controller, Scene } from 'react-scrollmagic';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import LazyLoadText from '../LazyLoadText/LazyLoadText';
import LazyLoadBulletPoints from '../LazyLoadBulletPoints/LazyLoadBulletPoints';




const Services = ({ displayPopUp, toggleDisplayPopUp, closePopUp }) => {
    
    return (
        <div className='services'>
            <SectionHeading  title="Services"/>
            <div className='services__content'> 
                <LazyLoadBulletPoints pointClass={'services__content__point'}
                    points={[
                        <><b>Production Consulting:</b> Offering skilled guidance on established content and event production projects.</>,
                        <><b>End-to-End Project Delivery:</b> From conceptualisation to flawless execution, we ensure your content or event projects come to life seamlessly.</>,
                        <><b>Production Design: </b>Leveraging our in-house interior design expertise for set design, dressing, prop, and space planning for event delivery.</>,
                        <><b>Content and Event Production: </b>Handling the entire production process, from initial concept to final execution.</>,
                        <><b>Production Management: </b>Coordinating, scheduling, budgeting, hiring, and assistant directing to ensure a smooth and efficient production.</>,
                        <><b>Creative Input: </b>Providing storytelling expertise to enhance the creative process.</>,
                        <><b>Creative Writing: </b>Offering script editing, scriptwriting, and write-ups (synopsis, plot, etc).</>
                    ]}
                />
            </div>
        </div>
    )
}

export default Services;
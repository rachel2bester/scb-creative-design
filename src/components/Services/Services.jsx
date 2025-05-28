import React from 'react'
import "./Services.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import LazyLoadBulletPoints from '../LazyLoadBulletPoints/LazyLoadBulletPoints';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import OnSet from '../../assets/images/CreativeProducing/OnSet.jpg'




const Services = () => {
    
    return (
        <div className='services'>
            <SectionHeading  title="Services" white/>
            
            <div className='services__content'> 
                
                <LazyLoadBulletPoints pointClass={'services__content__points__point'} containerClass={'services__content__points'}
                    points={[
                        <><b>Production Consulting:</b> Expert guidance on content and event production, serving as a producer, production manager, coordinator, or assistant</>,
                        <><b>End-to-End Project Delivery:</b> From concept to execution, we bring your vision to life</>,
                        <><b>Creative Writing / Editing</b></>,
                        <><b>Production Design:</b> In-house design expertise able to assist in both Set and Event design and dressing</>
                    ]} 
                />
                <LazyLoadImg imgSrc={OnSet} alt='Film Set' className='services__content__img'/>
            </div>
        </div>
    )
}

export default Services;
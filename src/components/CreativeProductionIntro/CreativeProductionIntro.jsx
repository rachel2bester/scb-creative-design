import React from 'react'
import "./CreativeProductionIntro.scss"
import LazyLoadText from '../LazyLoadText/LazyLoadText';

const CreativeProductionIntro = () => { 
    return (
        <div className="intro">
            <div className='intro__container'>  
                <LazyLoadText className={'intro__container__text'} text={
                        "We collaborate on creative projects of all scales, working with both established and emerging Film, TV, Theatre, and Event productions. With the ability to leverage our in-house design talent, we ensure seamless creative organisation and deliver exceptional final results for our client."
                }/>
            </div>
        </div>
    )
}

export default CreativeProductionIntro;
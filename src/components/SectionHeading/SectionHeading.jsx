import React from 'react'
import "./SectionHeading.scss"
import { Controller, Scene } from 'react-scrollmagic';

const SectionHeading = ({title, white}) => {
    const headingClassName = white ? "section-heading__heading section-heading__heading--white" : "section-heading__heading"
    const lineClassName = white ? "section-heading__line section-heading__line--white" : "section-heading__line"
    return (
        <div className='section-heading'>     
            <Controller>
                <Scene classToggle="section-heading__heading--visible" offset={-window.innerHeight/2 + 50}>
                    <div className={headingClassName}>{title}</div>
                </Scene>
                <Scene classToggle="section-heading__line--visible" offset={-window.innerHeight/2 + 50}>
                    <div className={lineClassName}></div>
                </Scene>
            </Controller>
        </div>
    )
}

export default SectionHeading
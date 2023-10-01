import React from 'react'
import "./SectionHeading.scss"
import { Controller, Scene } from 'react-scrollmagic';

const SectionHeading = ({title, white}) => {
    const headingClassName = white ? "section-heading section-heading--white" : "section-heading"
    return (
        <>
        {/* <Controller>
            <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={true}>
                {(progress, event) => (<>
                <div className="test">Pin Test {event.type} {progress}</div>
                <h1 className={headingClassName}>{title}</h1>
                </>
                )}
            </Scene>
            <Scene classToggle={['.test', 'yellow']} reverse={false} indicators={true}>
                <div>Toggle other class</div>
            </Scene>
        </Controller> */}
        </>
    )
}

export default SectionHeading
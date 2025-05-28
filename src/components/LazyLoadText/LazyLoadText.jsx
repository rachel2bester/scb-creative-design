import React from 'react'
import "./LazyLoadText.scss"
import { Controller, Scene } from 'react-scrollmagic';

const LazyLoadText = ({text, className, footer, onClick, id}) => {
    return (<>
            <Controller>
                <Scene classToggle="text--visible" offset={-window.innerHeight/2 + (footer ? 0 : 50)}>
                    <div onClick={onClick} id={id} key={id} className={'text ' + className}>{text}</div>
                </Scene> 
            </Controller>
        </>
    )
}

export default LazyLoadText;
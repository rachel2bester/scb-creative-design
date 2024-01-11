import React from 'react'
import "./MainHeading.scss"
import { Controller, Scene } from 'react-scrollmagic';

const MainHeading = ({title, white}) => {
    const headingClassName = white ? 'main-heading main-heading--white' : 'main-heading';

    return (
        <h1 className={headingClassName + " text--visible"}>{title}</h1>
    )
}

export default MainHeading
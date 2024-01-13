import React from 'react'
import "./MainHeading.scss"

const MainHeading = ({title, white, addedClass}) => {
    const headingClassName = white ? 'main-heading main-heading--white' : 'main-heading';

    return (
        <h1 className={headingClassName + " text--visible " + addedClass}>{title}</h1>
    )
}

export default MainHeading
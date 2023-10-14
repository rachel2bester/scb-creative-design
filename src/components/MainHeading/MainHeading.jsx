import React from 'react'
import "./MainHeading.scss"

const MainHeading = ({title, white}) => {
    const headingClassName = white ? 'main-heading main-heading--white' : 'main-heading';

    return (
        <h1 className={headingClassName}>{title}</h1>
    )
}

export default MainHeading
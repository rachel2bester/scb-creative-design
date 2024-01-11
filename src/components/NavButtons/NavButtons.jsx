import React from 'react'
import NavButton from '../NavButton/NavButton'

const NavButtons = ({closeNavPopup}) => {
    
    return (
        <>
            <NavButton title="Interiors" linkTo="/interiors" onClick={closeNavPopup}/>
            <NavButton title="Creative Production" linkTo="/creative-production" onClick={closeNavPopup}/>
            <NavButton title="Contact Us" linkTo="/contact-us" onClick={closeNavPopup}/>
        </>
    )
}

export default NavButtons
import React from 'react'
import NavButton from '../NavButton/NavButton'

const NavButtons = ({closePopUp}) => {
    
    return (
        <>
            <NavButton title="Interiors" linkTo="/interiors" closePopUp={closePopUp}/>
            <NavButton title="Content Production" linkTo="/content-production" closePopUp={closePopUp}/>
            <NavButton title="Contact Us" linkTo="/contact-us" closePopUp={closePopUp}/>
        </>
    )
}

export default NavButtons
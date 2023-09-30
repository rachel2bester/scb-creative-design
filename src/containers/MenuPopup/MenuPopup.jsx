import React from 'react'
import NavButtons from '../../components/NavButtons/NavButtons';
import "./MenuPopup.scss"

const MenuPopup = (props) => {
    const {displayPopUp, closePopUp} = props;

    
    return (
        <>
            {displayPopUp &&
                <div className="popup">
                    <NavButtons closePopUp={closePopUp}/>
                </div>
            }
        </>
    )
}

export default MenuPopup
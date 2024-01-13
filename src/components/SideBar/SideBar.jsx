import React from "react";
import LazyLoadText from "../LazyLoadText/LazyLoadText";
import MainHeading from "../MainHeading/MainHeading";
import "./SideBar.scss";
import Arrow from "../Arrow/Arrow";
import InteriorsDescription from "../InteriorsDescription/InteriorsDescription";


const SideBar = ({project, decrementProjectIndex, incrementProjectIndex, displaySideBar}) => {

    var sideBarClassName, text, dark, instruction, sideBarButtonClassName, sideBarInstructionClassName, sideBarContainerClassName

    if (project) {
        sideBarClassName = "side-bar side-bar--dark"
        text = project.projectBrief
        dark = true
        instruction = "Cycle through our projects"

    } else {
        sideBarClassName = "side-bar"
        text = <InteriorsDescription />
        dark = false
        instruction = "Click on a photo to explore our projects."
    }

    if (displaySideBar) {
        sideBarButtonClassName = dark ? "side-bar__button side-bar__button--hide side-bar__button--dark" : "side-bar__button side-bar__button--hide"
        sideBarInstructionClassName = "side-bar__instruction"
        sideBarContainerClassName ="side-bar__container"
    } else {
        sideBarClassName = sideBarClassName + " side-bar--hidden"
        sideBarButtonClassName = dark ? "side-bar__button side-bar__button--show side-bar__button--dark" : "side-bar__button side-bar__button--show"
        sideBarInstructionClassName ="side-bar__instruction side-bar__instruction--hidden"
        sideBarContainerClassName = "side-bar__container side-bar__container--hidden"
    }
    
    return (
        <div className={sideBarClassName}>
            <MainHeading title="Interiors" white={dark}/>
            <div className={sideBarContainerClassName} >
                {project && <LazyLoadText className="side-bar__subheading" text={project.projectName}/>}
                <LazyLoadText 
                    className={"side-bar__container__text"}
                    text={text}
                />
            </div>
            <div className={sideBarInstructionClassName}>
                <p>{instruction}</p>
                {project && 
                    <div className="side-bar__instruction__arrows">
                        <Arrow onClick={decrementProjectIndex} />
                        <Arrow onClick={incrementProjectIndex} right/>
                    </div>
                }
            </div>
            
        </div>
    );
};

export default SideBar;



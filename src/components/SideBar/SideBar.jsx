import React from "react";
import LazyLoadText from "../LazyLoadText/LazyLoadText";
import MainHeading from "../MainHeading/MainHeading";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./SideBar.scss";
import Arrow from "../Arrow/Arrow";


const SideBar = ({project, decrementProjectIndex, incrementProjectIndex, displaySideBar, toggleDisplaySideBar}) => {

    var sideBarClassName, title, text, dark, instruction, sideBarButtonClassName, sideBarInstructionClassName, sideBarContainerClassName

    if (project) {
        sideBarClassName = "side-bar side-bar--dark"
        text = project.projectBrief
        dark = true
        instruction = "Cycle through our projects"

    } else {
        sideBarClassName = "side-bar"
        title = "Interiors"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique magna eu nulla sollicitudin vestibulum. In sit amet augue quam. Aenean at volutpat est. Duis convallis tincidunt hendrerit. Sed nulla metus, bibendum ut justo vitae, semper egestas libero. Morbi odio ligula, tincidunt in mi id, aliquam sodales arcu. Nam id mattis massa. Integer ullamcorper sapien at purus auctor varius. Proin commodo sed dui a ullamcorper. Phasellus aliquet dignissim tellus, non consequat leo venenatis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique magna eu nulla sollicitudin vestibulum. In sit amet augue quam. Aenean at volutpat est. Duis convallis tincidunt hendrerit. Sed nulla metus, bibendum ut justo vitae, semper egestas libero. Morbi odio ligula, tincidunt in mi id, aliquam sodales arcu. Nam id mattis massa. Integer ullamcorper sapien at purus auctor varius. Proin commodo sed dui a ullamcorper. Phasellus aliquet dignissim tellus, non consequat leo venenatis non."
        dark = false
        instruction = "Click on a photo to explore our projects."
    }

    if (!displaySideBar) {
        sideBarClassName = sideBarClassName + " side-bar--hidden"
        sideBarButtonClassName = dark ? "side-bar__button side-bar__button--show side-bar__button--dark" : "side-bar__button side-bar__button--show"
        sideBarInstructionClassName ="side-bar__instruction side-bar__instruction--hidden"
        sideBarContainerClassName = "side-bar__container side-bar__container--hidden"
    } else {
        sideBarButtonClassName = dark ? "side-bar__button side-bar__button--hide side-bar__button--dark" : "side-bar__button side-bar__button--hide"
        sideBarInstructionClassName = "side-bar__instruction"
        sideBarContainerClassName ="side-bar__container"
    }
    
    return (
        <div className={sideBarClassName}>
            <MainHeading title={"Interiors"} white={dark}/>
            <div className={sideBarContainerClassName} >
                {project && <div className="side-bar__subheading" >{project.projectName}</div>}
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
                        <Arrow onClick={decrementProjectIndex} right/>
                    </div>
                }
            </div>
            <div className={sideBarButtonClassName} onClick={toggleDisplaySideBar}>           
                {displaySideBar ?
                    <svg 
                        viewBox="0 0 24 24" 
                        transform="scale (-1, 1)" 
                        transform-origin="center"
                    >
                        <path d="M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z" />
                    </svg> 
                    :
                    <svg viewBox="0 0 24 24">
                        <path d="M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z" />
                    </svg>
                }
            </div>
        </div>
    );
};

export default SideBar;



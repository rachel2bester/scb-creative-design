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
            
        </div>
    );
};

export default SideBar;



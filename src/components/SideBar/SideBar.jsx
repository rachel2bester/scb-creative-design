import React from "react";
import LazyLoadText from "../LazyLoadText/LazyLoadText";
import MainHeading from "../MainHeading/MainHeading";
import "./SideBar.scss";
import Arrow from "../Arrow/Arrow";
import InteriorsDescription from "../InteriorsDescription/InteriorsDescription";
import {useEffect } from "react";
import {useState } from "react";


const SideBar = ({project, decrementProjectIndex, incrementProjectIndex, displaySideBar, projects, onProjectClick}) => {

    const [projectsListJSX, setProjectsListJSX] = useState(null); 

    var sideBarClassName, text, dark, instruction, sideBarButtonClassName, sideBarInstructionClassName, sideBarContainerClassName

    useEffect(() => {
        setProjectsListJSX(projects.map((project, index) => {
            return (
                <li className="side-bar__container__projects_container__project">
                <LazyLoadText
                    className='side-bar__container__projects_container__project__text' 
                    id={"project_" + index}
                    key={"project_" + index}
                    onClick={event => onProjectClick(event, true)}
                    text={<><b>{project.projectName}</b><i> - {project.projectAdjectives}</i></>}
                />
                </li>
            )
        }))
    }, []);

    if (project) {
        sideBarClassName = "side-bar side-bar--dark"
        text = project.projectBrief
        dark = true
        instruction = "Cycle through our projects"

    } else {
        sideBarClassName = "side-bar"
        text = <InteriorsDescription projectsListJSX={projectsListJSX}/>
        dark = false
        instruction = "Select a project or click on a photo to explore our work"
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
                {project && <>
                        <LazyLoadText className="side-bar__subheading" text={project.projectName}/>
                        <LazyLoadText className="side-bar__adjectives" text={project.projectAdjectives}/>
                    </>}

                <LazyLoadText 
                    className={"side-bar__container__text"}
                    text={text}
                />
            </div>
            <div className={sideBarInstructionClassName}>
                <p className="side-bar__instruction__text">{instruction}</p>
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



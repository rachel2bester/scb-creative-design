import React from "react";
import LazyLoadText from "../LazyLoadText/LazyLoadText";
import MainHeading from "../MainHeading/MainHeading";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./SideBar.scss";


const SideBar = ({project, decrementProjectIndex, incrementProjectIndex}) => {

    var sideBarClassName, title, text, dark, instruction


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


    return (
        <div className={sideBarClassName}>
            <MainHeading title={"Interiors"} white={dark}/>
            <div className="side-bar__container" >
                {project && <div className="side-bar__subheading" >{project.projectName}</div>}
                <LazyLoadText 
                    className={"side-bar__container__text"}
                    text={text}
                />
            </div>
            <div className={"side-bar__instruction"}>
                <p>{instruction}</p>
                {project && 
                    <div className="side-bar__instruction__arrows">
                        <svg 
                            onClick={decrementProjectIndex}
                            className="photo-popup__grid__container__arrow"
                            viewBox="0 0 330 330"
                        >
                            <path  d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                                C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z" />
                        </svg>
                        <svg 
                            onClick={incrementProjectIndex}
                            className="photo-popup__grid__container__arrow"
                            viewBox="0 0 330 330"
                        >
                            <path transform="scale (-1, 1)" transform-origin="center" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                                C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z" />
                        </svg>
                    </div>
                }
            </div>
        </div>
    );
};

export default SideBar;



import React from "react";
import LazyLoadText from "../LazyLoadText/LazyLoadText";
import MainHeading from "../MainHeading/MainHeading";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./SideBar.scss";


const SideBar = ({project}) => {

    var sideBarClassName, title, text, dark


    if (project) {
        sideBarClassName = "side-bar side-bar--dark"
        text = project.projectBrief
        dark = true
    } else {
        sideBarClassName = "side-bar"
        title = "Interiors"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique magna eu nulla sollicitudin vestibulum. In sit amet augue quam. Aenean at volutpat est. Duis convallis tincidunt hendrerit. Sed nulla metus, bibendum ut justo vitae, semper egestas libero. Morbi odio ligula, tincidunt in mi id, aliquam sodales arcu. Nam id mattis massa. Integer ullamcorper sapien at purus auctor varius. Proin commodo sed dui a ullamcorper. Phasellus aliquet dignissim tellus, non consequat leo venenatis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique magna eu nulla sollicitudin vestibulum. In sit amet augue quam. Aenean at volutpat est. Duis convallis tincidunt hendrerit. Sed nulla metus, bibendum ut justo vitae, semper egestas libero. Morbi odio ligula, tincidunt in mi id, aliquam sodales arcu. Nam id mattis massa. Integer ullamcorper sapien at purus auctor varius. Proin commodo sed dui a ullamcorper. Phasellus aliquet dignissim tellus, non consequat leo venenatis non."
        dark = false
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
                Click on the photos to explore our projects.
            </div>
        </div>
    );
};

export default SideBar;



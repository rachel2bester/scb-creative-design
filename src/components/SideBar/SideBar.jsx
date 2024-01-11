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
        text = <>
                <p>
                    SCB specialises in the design, project management, curation, and transformation of homes, living spaces, and offices. As more than just your typical interiors company, we are your partners in producing exceptional interior design. Our comprehensive approach involves meticulous organisation and planning of every project, from designing bespoke furniture to managing suppliers and contractors on-site, alleviating the renovation stress for our clients.
                </p>
                <p>
                    Our exceptional interior design and space planning services often feature exquisitely crafted, cost-effective, bespoke items from South Africa (although we work with suppliers from across the UK to deliver for our clients as well) we absolutely love what we do so will happily take on projects of all sizes, and budgets so please get in touch to discuss your interior needs today.
                </p>
                <br/>
                <p><b>
                    Here is just some of what SCB can offer you:
                </b> </p>
                <ul>
                    <li>
                        <b>Space Planning and Layout Design:</b> Crafted bespoke designs optimising spatial utility, lighting, and furniture placement, bringing your vision to life. This can be with brand-new furniture or simply a rearrangement of your home, using existing pieces (house-whispering).
                    </li>
                    <li>
                        <b>Customised Furniture and Cabinetry:</b> Design of unique, tailored pieces reflecting your style and preferences.
                    </li>
                    <li>
                        <b>Sourcing and Procurement:</b> Procuring top-quality, cost-effective items, including bespoke South African furnishings.
                    </li>
                    <li>
                        <b>Furniture Installation:</b> Seamless installation of chosen furnishings by our dedicated team of Suppliers/Contractors
                    </li>
                    <li>
                        <b>Decorative Finishes:</b> Enhancing interiors with exquisite finishing touches, from artwork choices to minute design details.
                    </li>
                    <li>
                        <b>Office Space Redesign:</b> Adapting to the post-COVID business landscape with office repositioning and design services.
                    </li>
                    <li>
                        <b>Project Planning, Budgeting, and Scheduling:</b> Meticulous organisation and scheduling of every aspect, taking the stress away from the client by managing contractors and suppliers.
                    </li>
                </ul>
            </>
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



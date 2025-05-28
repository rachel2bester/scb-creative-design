import React from "react";
import LazyLoadText from "../LazyLoadText/LazyLoadText";
import "../../components/SideBar/SideBar.scss";
import LazyLoadBulletPoints from "../LazyLoadBulletPoints/LazyLoadBulletPoints";


const InteriorsDescription = ({projectsListJSX}) => {

    return (
        <>
            <div className={'side-bar__container'}>
                <LazyLoadText className={'side-bar__container__text'} text={
                        "With Caroline's 30 years of experience, SCB specialises in designing, curating, and transforming homes, living spaces, and offices. More than just an interiors company, we are your hands-on partners in creating exceptional spaces. From bespoke furniture design to full project management, we handle every detail - ensuring a seamless, stress-free renovation."
                    }/>

                <LazyLoadText className={'side-bar__container__text'} text={
                        "We source high-quality, cost-effective furnishings, including exquisite bespoke pieces from South Africa, and work with trusted suppliers across the UK. No matter the project, we're passionate about bringing your vision to life."
                    }/>
                <LazyLoadText className="side-bar__subheading" text={"Our Services"}/>
                <LazyLoadBulletPoints pointClass={'side-bar__container__list__point'} containerClass={'side-bar__container__list'}
                    points={[
                        
                        <><b>Space Planning & Layout Design</b> - Optimising space, lighting, and furniture placement, using new or existing pieces <i>(house whispering)</i></>,
                        <><b>Custom Furniture & Cabinetry</b> - Unique, tailored designs that reflect your style</>,
                        <><b>Sourcing & Procurement</b> - High-quality furnishings, including bespoke South African pieces</>,
                        <><b>Furniture Installation</b> - Seamless setup by our trusted suppliers and contractors</>,
                        <><b>Decorative Finishes</b> - Thoughtfully curated details, from artwork to final touches</>,
                        <><b>Office Space Redesign</b> - Smart, functional office transformations for modern businesses</>,
                        <><b>Project Management</b> - Handling planning, budgeting, and contractor coordination for a stress-free experience</>
                    ]} 
                />
                <LazyLoadText className="side-bar__subheading" text={"Recent Projects"}/>
                
                <ul className="side-bar__container__projects_container">
                    {projectsListJSX}
                </ul>
            </div>
        
        </>
    );
};

export default InteriorsDescription;



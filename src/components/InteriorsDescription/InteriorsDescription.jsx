import React from "react";
import LazyLoadText from "../LazyLoadText/LazyLoadText";
import "../../components/SideBar/SideBar.scss";
import LazyLoadBulletPoints from "../LazyLoadBulletPoints/LazyLoadBulletPoints";


const InteriorsDescription = () => {

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
                <LazyLoadBulletPoints pointClass={'side-bar__container__list'} containerClass={'side-bar__container__list__point'}
                    points={[
                        
                        <><b>Space Planning & Layout Design</b> - Optimising space, lighting, and furniture placement, using new or existing pieces <i>(house whispering)</i>.</>,
                        <><b>Custom Furniture & Cabinetry</b> - Unique, tailored designs that reflect your style.</>,
                        <><b>Sourcing & Procurement</b> - High-quality furnishings, including bespoke South African pieces.</>,
                        <><b>Furniture Installation</b> - Seamless setup by our trusted suppliers and contractors.</>,
                        <><b>Decorative Finishes</b> - Thoughtfully curated details, from artwork to final touches.</>,
                        <><b>Office Space Redesign</b> - Smart, functional office transformations for modern businesses.</>,
                        <><b>Project Management</b> - Handling planning, budgeting, and contractor coordination for a stress-free experience.</>
                    ]} 
                />


            </div>
            

            {/* <p>
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
            </ul> */}
        </>
    );
};

export default InteriorsDescription;



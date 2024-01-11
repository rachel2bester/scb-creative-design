import React from 'react'
import "./TheTeamPanel.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import TeamMember from '../TeamMember/TeamMember';


const TheTeamPanel = () => {
    
    return (
        <div className="the-team">
            <SectionHeading title="The Team" white={true}/>

            <TeamMember 
                teamMember="Caroline Cooney - Co-Director and Designer"
                imgSrc="http://placekitten.com/600/600" 
                text=
                    {<>Caroline, an interior and furniture design expert with over 30 years of experience, possesses a discerning eye and a deep knowledge of interior styling and design. She relishes in collaborating closely with clients, getting to know them in order to craft spaces that they adore within specified budgets. Her versatile background spans creative domains, including domestic and corporate design. Caroline's expertise also extends to sourcing and delivering exquisite South African furnishings worldwide. Moreover, she is an adept creative project manager, having handled event design and production."</>} 
            />
            <TeamMember teamMember="James Cooney - Creative Producer"
                imgSrc="http://placekitten.com/600/600" 
                text=
                    {<>James is a multi-disciplinary creative professional, holding a recent Master of Arts in Creative Producing from a top arts university in London. His extensive studies and hands-on experience have honed his project planning and execution skills. Growing up in a creative environment, he is well-prepared to manage client's artistic content and design endeavours. With a background in team management, James has contributed to creative projects in collaboration with prestigious institutions like the BBC and The Royal Central School of Speech and Drama. He possesses a keen eye for innovation, creative content, script editing, and design.</>} 
                swapped
            />
        </div>
    )
}

export default TheTeamPanel;
import React from 'react'
import "./TheTeamPanel.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import LazyLoadText from '../LazyLoadText/LazyLoadText';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import TeamMember from '../TeamMember/TeamMember';


const TheTeamPanel = () => {
    
    return (
        <div className="the-team">
            <SectionHeading title="The Team" white={true}/>

            <TeamMember 
                teamMember="Team Member1"
                imgSrc="http://placekitten.com/600/600" 
                text=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia viverra lobortis. Quisque luctus at dui dapibus pellentesque. Nulla hendrerit tellus metus, ut tempus lectus mollis et. Maecenas mi orci, malesuada eget ligula ut, convallis fermentum orci. Vestibulum efficitur fermentum nunc, et suscipit purus finibus sed. Aliquam ullamcorper lectus leo, a ornare ligula volutpat vitae. Vivamus condimentum ligula quis aliquam sollicitudin. Curabitur rutrum dolor libero, sit amet posuere nulla iaculis ut. In venenatis dui sed metus rhoncus hendrerit. Sed ac lacus vel lectus malesuada rhoncus." 
            />
            <TeamMember teamMember="Team Member2"
                imgSrc="http://placekitten.com/600/600" 
                text=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia viverra lobortis. Quisque luctus at dui dapibus pellentesque. Nulla hendrerit tellus metus, ut tempus lectus mollis et. Maecenas mi orci, malesuada eget ligula ut, convallis fermentum orci. Vestibulum efficitur fermentum nunc, et suscipit purus finibus sed. Aliquam ullamcorper lectus leo, a ornare ligula volutpat vitae. Vivamus condimentum ligula quis aliquam sollicitudin. Curabitur rutrum dolor libero, sit amet posuere nulla iaculis ut. In venenatis dui sed metus rhoncus hendrerit. Sed ac lacus vel lectus malesuada rhoncus." 
                swapped
            />
            <TeamMember teamMember="Team Member3"
                imgSrc="http://placekitten.com/600/600" 
                text=
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia viverra lobortis. Quisque luctus at dui dapibus pellentesque. Nulla hendrerit tellus metus, ut tempus lectus mollis et. Maecenas mi orci, malesuada eget ligula ut, convallis fermentum orci. Vestibulum efficitur fermentum nunc, et suscipit purus finibus sed. Aliquam ullamcorper lectus leo, a ornare ligula volutpat vitae. Vivamus condimentum ligula quis aliquam sollicitudin. Curabitur rutrum dolor libero, sit amet posuere nulla iaculis ut. In venenatis dui sed metus rhoncus hendrerit. Sed ac lacus vel lectus malesuada rhoncus." 
            />
        </div>
    )
}

export default TheTeamPanel;
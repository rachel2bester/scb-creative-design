import React from 'react'
import "./TheTeamPanel.scss"
import SectionHeading from '../SectionHeading/SectionHeading';


const TheTeamPanel = () => {
    
    return (
        <div className="the-team">
            <SectionHeading title="The Team" white={true}/>
            <div className='the-team__container'>
                <img src="http://placekitten.com/600/900" className='the-team__container__img'/>
                <div className='the-team__container__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus dolor, accumsan at ante ut, vestibulum iaculis odio. Pellentesque semper est ut urna luctus pellentesque. Cras interdum feugiat neque, et aliquet diam. Morbi et condimentum tortor, id efficitur eros. Sed vulputate velit turpis, at ullamcorper lectus laoreet vitae. Mauris fringilla a urna at scelerisque. Aliquam aliquet orci eu ullamcorper pellentesque. Curabitur quis maximus orci. In interdum, tellus et mollis malesuada, turpis tellus maximus dolor, sit amet egestas ex felis ut nisi. Duis eu felis fermentum, ultricies odio vitae, tincidunt eros. Etiam tristique ullamcorper sem, pellentesque rutrum nunc dapibus a. Morbi in venenatis purus, vitae laoreet ipsum. Aliquam commodo faucibus cursus. Nullam eu quam erat. Aliquam vitae dignissim metus. Vivamus accumsan.</div>
            </div>
        </div>
    )
}

export default TheTeamPanel;
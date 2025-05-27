import React from 'react'
import "./TeamMember.scss"
import LazyLoadText from '../LazyLoadText/LazyLoadText';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';


const TeamMember = ({teamMember, imgSrc, text, swapped}) => {
    
    return (
        <div className="member">
            <div className='member__heading'>
                <LazyLoadText text={teamMember}/>
            </div>

            {swapped ?
                <div className='member__container'>
                    <LazyLoadImg imgSrc={imgSrc} className='member__container__img' alt={teamMember}/>
                    <div className='member__container__text'>
                        <LazyLoadText  text={text}/>
                    </div>
                </div>
                :
                <div className='member__container member__container--swapped'>
                    <div className='member__container__text'>
                        <LazyLoadText  text={text}/>
                    </div>
                    <LazyLoadImg imgSrc={imgSrc} className='member__container__img' alt={teamMember}/>
                </div>
            }
        </div>
    )
}

export default TeamMember;
import React from 'react'
import "./Projects.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import LazyLoadBulletPoints from '../LazyLoadBulletPoints/LazyLoadBulletPoints';
import LazyLoadImg from '../LazyLoadImg/LazyLoadImg';
import JamesOnSetImg from '../../assets/images/CreativeProducing/JamesAtWork.jpeg'




const Projects = () => {
    
    return (
        <div className='projects'>
            <SectionHeading  title="Projects" />
            <div className='projects__content'> 
                <LazyLoadBulletPoints pointClass={'projects__content__points__point'} containerClass={'projects__content__points'}
                    points={[
                        

                        <><b>Production Secretary,</b> Feature Film: 10 Dance, Netflix / Ringside Studios, 2025</>,
                        <><b>Production Manager,</b> Vertical Drama Series, First Tone Productions, 2025</>,
                        <><b>Production Assistant,</b> Barbie X Stanley Cup Product Launch Event, London 2024</>,
                        <><b>Production Assistant,</b> Linkedin, B2Belive Event Conference, London, 2024</>,
                        <><b>Producer,</b> Recording of Live Acting Students Stage Performance for Drama School, 2024</>,
                        <><b>Assistant Producer,</b> Short Film: The Downfall of Tray the Wonderhorse, London, 2024</>,
                        <><b>Assistant Producer,</b> Short Film, Loop, London, 2024</>,
                        <><b>Production Assistant,</b> JCB Investor Conference, Banking Hall, London, 2023</>,
                        <><b>Producer,</b> Showreels for Acting school, RCSSD, 2023</>,
                        <><b>Production Manager,</b> Short Film: Animals, 2023</>,
                        <><b>Production Manager,</b> Short Film: Beltane, 2023</>,
                        <><b>Production Manager,</b> Short Film: Taxi, 2023</>,
                        <><b>Production Manager,</b> Short Film: Shortage, 2023</>,
                        <><b>Production Manager,</b> Short Film: Section, 2023</>,
                        <><b>Production Manager,</b> Short Film: A Cocktale of Love, 2023</>,
                        <><b>Production Assistant,</b> Docudrama: Countdown to Abdication, BBC, 2023</>,
                        <><b>Production Assistant,</b> Charity Commercial: Tearfund, Friend TV, 2023</>,
                        <><b>Production Assistant,</b> Music Video: Kobra, Camp Collective, 2023</>,
                        <><b>Production Assistant,</b> Short Film: NZU, London, Uzong Films, 2022</>,
                        <><b>Production Assistant,</b> Commercial Stills Shoot: Adidas / Honor Oak, The Midnight Club, 2022</>,
                        <><b>Production Assistant,</b> Commercial Shoot: Adidas Global Membership, The Midnight Club Shoot, 2022</>,
                        <><b>Assistant Producer,</b> Short Series: Welcome to Hell, 2022</>,
                        <><b>Assistant Producer,</b> Short Film: All of Our Weapons, 2021</>,
                        <><b>Assistant Producer,</b> Short film: The First Dance, 2021</>,
                        <><b>Producer & Playwright,</b> Short Theatre Show, Waving not drowning and trying not…, 2020</>,
                        <><b>Theatre Director,</b> Short Play: The Case of Sarah Petty, 2020</>


                    ]} 
                />
                <LazyLoadImg imgSrc={JamesOnSetImg} alt="James on set" className="projects__content__img"/>
            </div>
        </div>
    )
}

export default Projects;
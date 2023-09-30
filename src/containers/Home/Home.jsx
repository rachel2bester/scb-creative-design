import React from "react";
import "./Home.scss";
import MenuPopup from "../MenuPopup/MenuPopup";
import Nav from "./../Nav/Nav";
import { Controller, Scene } from 'react-scrollmagic';
import LogoPanel from "../../components/LogoPanel/LogoPanel"
import AboutUs from "../../components/AboutUsPanel/AboutUsPanel";
import { useState } from "react";
import { useEffect } from "react";




const Home = ({ displayPopUp, toggleDisplayPopUp, closePopUp }) => {
    const [navClear, setNavClear] = useState(true);
    const handleScroll = () => {
        
        if (window.scrollY > window.innerHeight - 75) {
            setNavClear(false)
            
        } else {
            setNavClear(true)
        }

    }
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className="home">
            <Nav
                toggleDisplayPopUp={toggleDisplayPopUp}
                closePopUp={closePopUp}
                displayPopUp={displayPopUp}
                clear={navClear}
            />
        
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                <Scene pin>
                    <LogoPanel displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
                </Scene>
                <Scene pin>
                    <AboutUs displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
                </Scene>
                <Scene pin>
                    <div className="panel green"><span>Panel</span></div>
                </Scene>
                <Scene pin>
                    <div className="panel bordeaux"><span>Panel</span></div>
                </Scene>
            </Controller>
        </div>
    );
};

export default Home;

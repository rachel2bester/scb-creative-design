import React from "react";
import "./Home.scss";
import Nav from "./../Nav/Nav";
import { Controller, Scene } from 'react-scrollmagic';
import LogoPanel from "../../components/LogoPanel/LogoPanel"
import AboutUs from "../../components/AboutUs/AboutUs";
import { useState } from "react";
import { useEffect } from "react";
import TheTeamPanel from "../../components/TheTeamPanel/TheTeamPanel";
import BottomBar from "../BottomBar/BottomBar";


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
                    <LogoPanel/>
                </Scene>
                <Scene pin>
                    <>
                    <AboutUs />
                    <TheTeamPanel />
                    <BottomBar />
                    </>
                </Scene>
            </Controller>
        </div>
    );
};

export default Home;

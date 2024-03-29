import React from "react";
import "./Home.scss";
import { Controller, Scene } from 'react-scrollmagic';
import LogoPanel from "../../components/LogoPanel/LogoPanel"
import AboutUs from "../../components/AboutUs/AboutUs";
import { useState } from "react";
import { useEffect } from "react";
import TheTeamPanel from "../../components/TheTeamPanel/TheTeamPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = ({toggleDisplayNavPopup, displayNavPopup, closeNavPopup}) => {

    const [navClear, setNavClear] = useState(true);
    const [popupClear, setPopupClear] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
        if (window.scrollY > window.innerHeight - 75) {
            setNavClear(false)
            
        } else {
            setNavClear(true)
        }
        if (window.scrollY > window.innerHeight - 260) {
            setPopupClear(false)
            
        } else {
            setPopupClear(true)
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
            <Header displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} navClear={navClear} popupClear={popupClear} closeNavPopup={closeNavPopup}/>
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                <Scene pin>
                    <LogoPanel displayNavPopup={displayNavPopup} scrollY={scrollY}/>
                </Scene>
                <Scene pin>
                    <>
                    <AboutUs />
                    <TheTeamPanel />
                    <Footer dark={false}/>
                    </>
                </Scene>
            </Controller>
        </div>
    );
};

export default Home;

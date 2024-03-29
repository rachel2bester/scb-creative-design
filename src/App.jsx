import './App.scss';
import React, { useState } from "react";
import Home from './containers/Home/Home';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import Interiors from './containers/Interiors/Interiors';
import CreativeProduction from './containers/CreativeProduction/CreativeProduction';
import ContactUs from './containers/ContactUs/ContactUs';
import dummyProjects from './assets/data/projects';

function App() {

    const [displayNavPopup, setDisplayNavPopup] = useState(false);
    const toggleDisplayNavPopup = () => {
        setDisplayNavPopup(!displayNavPopup);
    };

    const closeNavPopup = () => {
        setDisplayNavPopup(false);
    };
    
    
    return (
        <Router>
        <div className="App">
            <Routes>
                <Route path='/' element={<Home displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} closeNavPopup={closeNavPopup}/>}/>
                <Route path='/interiors' element={<Interiors projects={dummyProjects} displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} closeNavPopup={closeNavPopup}/>}/>
                <Route path='/creative-production' element={<CreativeProduction displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} closeNavPopup={closeNavPopup} />}/>
                <Route path='/contact-us' element={<ContactUs displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} closeNavPopup={closeNavPopup} />}/>
            </Routes>
        </div>
        </Router>
    );
}

export default App;

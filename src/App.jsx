import './App.scss';
import React, { useState } from "react";
import Home from './containers/Home/Home';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import Interiors from './containers/Interiors/Interiors';
import ContentProduction from './containers/ContentProduction/ContentProduction';
import ContactUs from './containers/ContactUs/ContactUs';

function App() {
    const [displayPopUp, setDisplayPopUp] = useState(false);

    const toggleDisplayPopUp = () => {
        setDisplayPopUp(!displayPopUp);
    };

    const closePopUp = () => {
        setDisplayPopUp(false);
    };
    
    return (
        <Router>
        <div className="App">
            <Routes>
                <Route path='/' element={<Home displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/interiors' element={<Interiors displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/content-production' element={<ContentProduction displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/contact-us' element={<ContactUs displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
            </Routes>
            
        </div>
        </Router>
    );
}

export default App;

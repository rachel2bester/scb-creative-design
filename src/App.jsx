import './App.scss';
import React, { useState } from "react";
import Home from './containers/Home/Home';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import Interiors from './containers/Interiors/Interiors';
import ContentProduction from './containers/ContentProduction/ContentProduction';
import ContactUs from './containers/ContactUs/ContactUs';

function App() {
    const [displayNavPopup, setDisplayNavPopup] = useState(false);

    const toggleDisplayNavPopup = () => {
        setDisplayNavPopup(!displayNavPopup);
    };
    
    return (
        <Router>
        <div className="App">
            <Routes>
                <Route path='/' element={<Home displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} />}/>
                <Route path='/interiors' element={<Interiors displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} />}/>
                <Route path='/content-production' element={<ContentProduction displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} />}/>
                <Route path='/contact-us' element={<ContactUs displayNavPopup={displayNavPopup} toggleDisplayNavPopup={toggleDisplayNavPopup} />}/>
            </Routes>
            
        </div>
        </Router>
    );
}

export default App;

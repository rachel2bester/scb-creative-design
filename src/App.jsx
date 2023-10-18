import './App.scss';
import React, { useState } from "react";
import Home from './containers/Home/Home';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import Interiors from './containers/Interiors/Interiors';
import ContentProduction from './containers/ContentProduction/ContentProduction';
import ContactUs from './containers/ContactUs/ContactUs';
import dummyProjects from './assets/data/dummyProjects';

function App() {
    
    
    return (
        <Router>
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/interiors' element={<Interiors projects={dummyProjects}/>}/>
                <Route path='/content-production' element={<ContentProduction  />}/>
                <Route path='/contact-us' element={<ContactUs  />}/>
            </Routes>
            
        </div>
        </Router>
    );
}

export default App;

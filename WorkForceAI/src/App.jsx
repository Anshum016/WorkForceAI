import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Tools from './Components/Tools'; 
import Contact from './Components/Contact';
import React from 'react';
import VantaBackgorund from './Components/VantaBackground';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <VantaBackgorund>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </VantaBackgorund>
      <Footer/>

    </Router>
  );
}

export default App;

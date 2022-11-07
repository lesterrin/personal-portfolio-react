import React from 'react';
import './app.css';
import Navbar from '../navbar';
import Home from '../home';
import About from '../about';
import Projects from "../projects";
import Footer from '../footer';

const App = () => {
  return (
      <React.Fragment>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </React.Fragment>
  );
}

export default App;

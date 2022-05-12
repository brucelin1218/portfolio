import React from 'react';
import {Header, About, Projects, Footer, Skills, Contacts } from './containers';
import './App.css'
import Navbar from './components/navbar/Navbar';


function App() {
  return (

      <div className="App">

        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>

    </div>
);
}

export default App;

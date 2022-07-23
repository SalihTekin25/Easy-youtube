import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/pages/About';
import Navbar from './components/container/Navbar';
import React from 'react';
import {useState} from 'react';
import { Button } from '@chakra-ui/react';
import Liste from './components/liste/Liste';
import {LanguageProvider} from './context/Language';



function App() {


  return (
    <div >
      <LanguageProvider >
      <BrowserRouter>

        <Navbar  />

        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Liste />} />
          
        </Routes>

      </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}



export default App;


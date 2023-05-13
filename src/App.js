import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Navbar from "./components/container/Navbar";
import React from "react";
import Liste from "./components/liste/Liste";
import { AllContextesProvider } from "./context/AllContextes";

function App() {
  return (
    <div>
      <AllContextesProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Liste />} />
          </Routes>
        </BrowserRouter>
      </AllContextesProvider>
    </div>
  );
}

export default App;

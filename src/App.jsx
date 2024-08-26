import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import Plan from "./pages/Plan/index.jsx";
import NoPage from "./pages/NoPage/index.jsx";
import Start from "./pages/Start/index.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Plan" element={<Plan />} />
                <Route path="/Start" element={<Start />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Router>
    );
};

export default App;

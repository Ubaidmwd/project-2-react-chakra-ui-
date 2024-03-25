import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Slider from "./components/Slider";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />

        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Slider />
      <Footer />
    </Router>
  );
};

export default App;

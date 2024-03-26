import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Slider from "./components/Slider";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <SliderOrNot />
      <Footer />
    </Router>
  );
};

const SliderOrNot = () => {
  const location = useLocation();

  // Check if the current location matches '/login'
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null; // Don't render Slider component
  }

  return <Slider />; // Render Slider component for other routes
};

export default App;

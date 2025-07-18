import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/scrollToTop";
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Qualifications from "./pages/Qualifications";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  const [activesidebar, setactivesidebar] = useState(true);
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />

      <div className="main flex">
        <Sidebar
          activesidebar={activesidebar}
          toggleSidebar={() => setactivesidebar(!activesidebar)}
        />
        <div
          className={`flex-1 ${
            activesidebar ? "md:ml-[20%]" : "md:w-full"
          } transition-all duration-400 ease-in`}
        >
          <Navbar
            toggleSidebar={() => setactivesidebar(!activesidebar)}
            activesidebar={activesidebar}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route
              path="/projects"
              element={<Projects activesidebar={activesidebar} />}
            />
          </Routes>
        </div>
      </div>
      <Footer activesidebar={activesidebar} />
    </Router>
  );
}

export default App;

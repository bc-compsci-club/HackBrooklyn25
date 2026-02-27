import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

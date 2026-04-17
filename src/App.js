import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Tracks from "./components/Tracks";
import SponsoredTracks from "./components/SponsoredTracks";
import Speakers from "./components/Speakers";
import Prizes from "./components/Prizes";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Schedule from "./components/Schedule";

function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Tracks/>
      <SponsoredTracks/>
      <Speakers/>
      <Prizes/>
      <FAQ/>
      <Sponsors/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen overflow-x-hidden">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

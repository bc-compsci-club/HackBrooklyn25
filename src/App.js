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

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Tracks/>
      <SponsoredTracks/>
      <Speakers/>
      <Prizes/>
      <FAQ/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;

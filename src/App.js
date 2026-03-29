import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
// import Tracks from "./components/Tracks";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Tracks/> */}
      <FAQ />
      <Footer/>
    </div>
  );
}

export default App;

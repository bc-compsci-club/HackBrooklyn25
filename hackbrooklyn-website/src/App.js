
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  const appBgStyle = {
    backgroundImage: 'url(/images/main-bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: '100% auto', // scale with viewport width, keep full image width visible
  };

  return (
    <div className="App" style={appBgStyle}>
      <Navbar />
  <Section id="landing" title="HACK BROOKLYN" pos="top-center" titleSize="7vw" textSize="2.2vw">
      </Section>
      <Section
        id="about"
        title="ABOUT"
        pos="center-left"
        offsetY="-11vw"
        offsetX="1.25vw"
        titleSize="7vw"
        textSize="2.2vw"
      >
        <p>About the hackathon...</p>
      </Section>
      <Section id="tracks" title="TRACKS" pos="bottom-right" titleSize="7vw" textSize="2.2vw">
        <p>Tracks information...</p>
      </Section>
      <Section id="faq" title="FAQ" pos="top-left" titleSize="7vw" textSize="2.2vw">
        <p>Frequently Asked Questions...</p>
      </Section>
      <Section id="sponsors" title="SPONSORS" pos="bottom-center" titleSize="7vw" textSize="2.2vw">
        <p>Our sponsors...</p>
      </Section>
    </div>
  );
}

export default App;

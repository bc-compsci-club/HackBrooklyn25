
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
      <Section id="landing" title="">
      </Section>
      <Section id="about" title="">
      </Section>
      <Section id="tracks" title="">
      </Section>
      <Section id="faq" title="">
      </Section>
      <Section id="sponsors" title="">
      </Section>
    </div>
  );
}

export default App;

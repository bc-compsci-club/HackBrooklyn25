
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="section">
        <object 
          data="/images/hero.svg" 
          type="image/svg+xml"
          className="hero-svg"
          aria-label="Hack Brooklyn"
        >
          <img src="/images/hero.svg" alt="Hack Brooklyn" className="hero-image" />
        </object>
      </div>
      <div className="section">
        <object 
          data="/images/about.svg" 
          type="image/svg+xml"
          className="hero-svg"
          aria-label="About"
        >
          <img src="/images/about.svg" alt="About" className="hero-image" />
        </object>
      </div>
    </div>
  );
}

export default App;

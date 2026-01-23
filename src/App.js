
import './App.css';

function App() {
  return (
    <div className="App">
      <object 
        data="/images/hero.svg" 
        type="image/svg+xml"
        className="hero-svg"
        aria-label="Hack Brooklyn"
      >
        <img src="/images/hero.svg" alt="Hack Brooklyn" className="hero-image" />
      </object>
    </div>
  );
}

export default App;

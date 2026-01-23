
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">
            <span className="brand-text">Hack Brooklyn</span>
          </div>
          <div className="nav-links">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
          </div>
        </div>
      </nav>
      <div className="hero-section" id="hero">
        <img src="/images/heroo.svg" alt="Hero" />
        <a href="mailto:bc.cis.club@gmail.com" className="sponsor-button">Sponsor Us</a>
        <p className="sponsor-email">Or email bc.cis.club@gmail.com</p>
      </div>
      <img src="/images/about.svg" alt="About" id="about" />
      
      <footer className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com/hackbrooklyn/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram social-icon"></i>
            <span className="social-text">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/hack-brooklyn/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin social-icon"></i>
            <span className="social-text">LinkedIn</span>
          </a>
          <a href="https://bccs.club/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fas fa-globe social-icon"></i>
            <span className="social-text">BCCS Club</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

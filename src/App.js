
import './App.css';

function App() {
  const appBgStyle = {
    backgroundImage: 'url(/images/hero.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    width: '100vw',
  };

  return (
    <div className="App" style={appBgStyle}>
    </div>
  );
}

export default App;

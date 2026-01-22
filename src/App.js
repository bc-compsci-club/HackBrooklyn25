
import './App.css';

function App() {
  const appBgStyle = {
    backgroundImage: 'url(/images/hero.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundColor: '#000',
    minHeight: '100vh',
    width: '100vw',
  };

  return (
    <div className="App" style={appBgStyle}>
    </div>
  );
}

export default App;

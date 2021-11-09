import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Hi guys My name is Khushi Jangid</h1>
        </p>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Youtube from here.
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/khushi__jangid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to my Insta
        </a>
      </header>
    </div>
  );
}

export default App;

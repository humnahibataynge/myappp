import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>This is my first react app is here, you got it boi? ?</h1>
        </p>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Youtube from here 
        </a>
        <a
          className="App-link"
          href="https://dev.azure.com/umeshsainiggwp0733"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Azure
        </a>
      </header>
    </div>
  );
}

export default App;

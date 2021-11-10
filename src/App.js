import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chinu bhai padh le, ye match me kuch nahi rakha..
        </p>
        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=Exk4AC6Aad0&ab_channel=MahatmajiTechnical"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ye dekh le, match ke bajay.
        </a>
      </header>
    </div>
  );
}

export default App;

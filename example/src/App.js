import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import VConsole from 'vconsole';

const vConsole = new VConsole();

function App() {
  useEffect(() => {
    throw  new Error(123);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  );
}

export default App;

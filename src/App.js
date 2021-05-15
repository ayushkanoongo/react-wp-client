import logo from './logo.svg';
import './App.css';
import PhoneNumber from './PhoneNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' className="App-logo" alt="logo" />
        <PhoneNumber />
      </header>
    </div>
  );
}

export default App;
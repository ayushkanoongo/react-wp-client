import './App.css';
import PhoneNumber from './components/PhoneNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Send whatsapp messages without adding in contact.</p>
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' className="App-logo" alt="logo" />
        <PhoneNumber />
      </header>
    </div>
  );
}

export default App;
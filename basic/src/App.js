import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import QRCodeGenerator from './components/accordion/qr-code-generator';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <QRCodeGenerator/>
    </div>
  );
}

export default App;

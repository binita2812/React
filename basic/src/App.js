import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import QRCodeGenerator from './components/qr-code-generator';
import UseFetchHookTest from './components/use-fetch/test';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <QRCodeGenerator/>
      <UseFetchHookTest/>
    </div>
  );
}

export default App;

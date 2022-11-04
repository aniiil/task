
import './App.css';
import Foot from './Component/Foot/Foot';
import Copy from './Component/Footer/Copy';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Foot/>
    <Copy/>
    </BrowserRouter>
    </>

  );
}

export default App;

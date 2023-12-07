import './App.css';
import './css/color.css';
import './css/font.css';
import './css/move.css';
import './css/size.css';
import './css/sort.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Open from './pages/open/open';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Open />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

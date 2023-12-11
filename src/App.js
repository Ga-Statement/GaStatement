import './App.css';
import './css/color.css';
import './css/font.css';
import './css/move.css';
import './css/size.css';
import './css/sort.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Open from './pages/open/open';
import Mainpage from './pages/main';
import ShopPage from './pages/shop';
import Navbar from './components/navbar';
import Payment from './pages/payment';
import Premium from './pages/premium';

const AnimatedRoute = ({ children, animationType }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames={animationType}
        timeout={1500}
      >
        <div>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<AnimatedRoute animationType="fade"><Open /></AnimatedRoute>} />
          <Route path='/main' element={<AnimatedRoute animationType="fade"><Mainpage /></AnimatedRoute>} />
          <Route path='/shop' element={<AnimatedRoute animationType="fade"><ShopPage /></AnimatedRoute>} />
          <Route path='/payment' element={<AnimatedRoute animationType="fade"><Payment /></AnimatedRoute>} />
          <Route path="/premium" element={<AnimatedRoute animationType="fade"><Premium/></AnimatedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

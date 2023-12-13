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
import PaymentComplete from './pages/paycomplete';
import Premium1 from './pages/premium/premium1/premium1';
import Premium2 from './pages/premium/premium2/premium2';
import Standard1 from './pages/standard/standard1';
import Standard2 from './pages/standard/standard2';

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
          <Route path='/paycomplete' element={<AnimatedRoute animationType="fade"><PaymentComplete /></AnimatedRoute>} />
          <Route path="/premium1" element={<AnimatedRoute animationType="fade"><Premium1/></AnimatedRoute>} />
          <Route path="/premium2" element={<AnimatedRoute animationType="fade"><Premium2/></AnimatedRoute>} />
          <Route path="/standard1" element={<AnimatedRoute animationType="fade"><Standard1/></AnimatedRoute>} />
          <Route path="/standard2" element={<AnimatedRoute animationType="fade"><Standard2/></AnimatedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

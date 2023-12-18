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
import Payment1 from './pages/payment/payment1';
import Payment2 from './pages/payment/payment2';
import Payment3 from './pages/payment/payment3';
import Payment4 from './pages/payment/payment4';
import PaymentComplete1 from './pages/paycomplete/paycomplete1.js';
import PaymentComplete2 from './pages/paycomplete/paycomplete2.js';
import PaymentComplete3 from './pages/paycomplete/paycomplete3.js';
import PaymentComplete4 from './pages/paycomplete/paycomplete4.js';
import Premium1 from './pages/premium/premium1/premium1';
import Premium2 from './pages/premium/premium2/premium2';
import Standard1 from './pages/standard/standard1';
import Standard2 from './pages/standard/standard2';
import Drawer from './pages/drawer/drawer';
import Cart from './pages/cart.js';
import Admin from './pages/admin';

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
          <Route path='/payment1' element={<AnimatedRoute animationType="fade"><Payment1 /></AnimatedRoute>} />
          <Route path='/payment2' element={<AnimatedRoute animationType="fade"><Payment2 /></AnimatedRoute>} />
          <Route path='/payment3' element={<AnimatedRoute animationType="fade"><Payment3 /></AnimatedRoute>} />
          <Route path='/payment4' element={<AnimatedRoute animationType="fade"><Payment4 /></AnimatedRoute>} />
          <Route path='/paycomplete1' element={<AnimatedRoute animationType="fade"><PaymentComplete1 /></AnimatedRoute>} />
          <Route path='/paycomplete2' element={<AnimatedRoute animationType="fade"><PaymentComplete2 /></AnimatedRoute>} />
          <Route path='/paycomplete3' element={<AnimatedRoute animationType="fade"><PaymentComplete3 /></AnimatedRoute>} />
          <Route path='/paycomplete4' element={<AnimatedRoute animationType="fade"><PaymentComplete4 /></AnimatedRoute>} />
          <Route path="/premium1" element={<AnimatedRoute animationType="fade"><Premium1/></AnimatedRoute>} />
          <Route path="/premium2" element={<AnimatedRoute animationType="fade"><Premium2/></AnimatedRoute>} />
          <Route path="/standard1" element={<AnimatedRoute animationType="fade"><Standard1/></AnimatedRoute>} />
          <Route path="/standard2" element={<AnimatedRoute animationType="fade"><Standard2/></AnimatedRoute>} />
          <Route path="/drawer" element={<AnimatedRoute animationType="fade"><Drawer/></AnimatedRoute>} />
          <Route path="/cart" element={<AnimatedRoute animationType="fade"><Cart/></AnimatedRoute>} />
          <Route path="/admin" element={<AnimatedRoute animationType="fade"><Admin/></AnimatedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

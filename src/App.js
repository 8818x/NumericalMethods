import { BrowserRouter as Router , Routes, Route, Navigate} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Bisection from './pages/Bisection';
import Falseposition from './pages/Falseposition';
import Onepoint from './pages/Onepoint';
import Newtonraphson from './pages/Newtonraphson';
import Secant from './pages/Secant';
import Test3 from './pages/test3';


import Test1 from './pages/test1';
import Test2 from './pages/test2';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' exact element={<Navigate to='/Bisection'/>}/>
        <Route path='/Bisection' element={<Bisection/>}/>
        <Route path='/False-Position' element={<Falseposition/>}/>
        <Route path='/One-Point' element={<Onepoint/>}/>
        <Route path='/Newtonraphson' element={<Newtonraphson/>}/>
        <Route path='/Secant' element={<Secant/>}/>
        <Route path='/test3' element={<Test3/>}/>
        <Route path='/Test1' element={<Test1/>}/>
        <Route path='/Test2' element={<Test2/>}/>
      </Routes>
      
    </Router>
  </>
  );
}

export default App;


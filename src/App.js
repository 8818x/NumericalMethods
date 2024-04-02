import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Bisection from './pages/Bisection';
import FalsePosition from './pages/FalsePosition';
import Onepoint from './pages/Onepoint';
import NewtonRaphson from './pages/NewtonRaphson';
import Secant from './pages/Secant';
import GaussJordan from './pages/GaussJordan';
import LinearRegression from './pages/LinearRegression';
import PolynomialRegression from './pages/PolynomialRegression';


import Test1 from './pages/test1';
import Test2 from './pages/test2';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<Navigate to='/Bisection' />} />
          <Route path='/Bisection' element={<Bisection />} />
          <Route path='/FalsePosition' element={<FalsePosition />} />
          <Route path='/One-Point' element={<Onepoint />} />
          <Route path='/NewtonRaphson' element={<NewtonRaphson />} />
          <Route path='/Secant' element={<Secant />} />
          <Route path='/GaussJordan' element={<GaussJordan />} />
          <Route path='/LinearRegression' element={<LinearRegression />} />
          <Route path='/PolynomialRegression' element={<PolynomialRegression />} />
          <Route path='/Test1' element={<Test1 />} />
          <Route path='/Test2' element={<Test2 />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navmusgro from './components/Navmusgro';
import Footermusgro from './components/Footermusgro';
import About from './pages/About';
import Shop from './pages/Shop';
import ProductDetails from './components/ProductDetails';
import Services from './components/Services';
import Dashoard from './pages/Dashoard';


function App() {
  return (
    <Router>

      <Navmusgro />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/productdetails' element={<ProductDetails />} />
        <Route path='/services' element={<Services />} />
        <Route path='/dashboard' element={<Dashoard />} />

      </Routes>
      <Footermusgro />
    </Router>
  );
}

export default App;

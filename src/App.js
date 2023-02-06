import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About-us/About';
import ContactUs from './pages/contact-us/ContactUs';
import Home from './pages/Home/Home';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import Services from './pages/services/Services';
import Team from './pages/team/Team';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<Product />} />
          <Route path='/services' element={<Services />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

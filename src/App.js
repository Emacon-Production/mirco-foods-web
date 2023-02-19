import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About-us/About';
import ContactUs from './pages/contact-us/ContactUs';
import Home from './pages/Home/Home';
import Impact from './pages/impact/Impact';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import Services from './pages/services/Services';
import Team from './pages/team/Team';
import OurValues from './pages/values/OurValues';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/values' element={<OurValues />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<Product />} />
          <Route path='/services' element={<Services />} />
          <Route path="/impact" element={<Impact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

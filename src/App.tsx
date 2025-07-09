import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Index';
import About from './pages/About';
import Products from './pages/Products';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Certificates from './components/Certificates';
import ScrollToTop from './components/ScrollToTop';
import ProductsSection from './components/ProductsSection';

function App() {
  return (
    <>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Layout is parent route */}
          <Route path="/" element={<Layout />}>
            {/* Nested routes rendered inside Layout's <Outlet /> */}
            <Route index element={<Home />} />            {/* default route "/" */}
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/*" element={<ProductsSection />} />
            <Route path="features" element={<Features />} />
            <Route path="contact" element={<Contact />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

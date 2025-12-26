import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/Layout';
import { LanguageProvider } from './i18n';
import './index.css';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </Router>
  );
}

export default App;

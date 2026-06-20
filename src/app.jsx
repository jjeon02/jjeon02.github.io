import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/nav';
import Footer from './components/footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import NotFound from './pages/NotFound';
import Home from './pages/home';
import About from './pages/about';
import Project1 from './pages/project-1';
import Project2 from './pages/project-2';
import Project3 from './pages/project-3';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project-1" element={<Project1 />} />
        <Route path="/project-2" element={<Project2 />} />
        <Route path="/project-3" element={<Project3 />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </HashRouter>
  );
}

export default App;

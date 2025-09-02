
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import TeachersPortal from './pages/TeachersPortal';
import ParentsPortal from './pages/ParentsPortal';

const App: React.FC = () => {
  const ScrollToTop: React.FC = () => {
    const location = useLocation();
    React.useEffect(() => {
      if (!location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }, [location.pathname]);
    return null;
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white font-sans text-secondary-navy">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portal/teachers" element={<TeachersPortal />} />
            <Route path="/portal/parents" element={<ParentsPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { Homepage } from './components/Homepage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { LogoIntro } from './components/LogoIntro';
import { CustomCursor } from './components/CustomCursor';
import { ParticleSystem } from './components/ParticleSystem';

type PageType = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Show intro first, then loading
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      const loadingTimer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(loadingTimer);
    }, 4000); // Simple logo intro duration
    return () => clearTimeout(introTimer);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageType);
    // Smooth scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const pageProps = { onPageChange: handlePageChange };
    
    switch (currentPage) {
      case 'home':
        return <Homepage {...pageProps} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage {...pageProps} />;
      case 'portfolio':
        return <PortfolioPage {...pageProps} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Homepage {...pageProps} />;
    }
  };

  // Show intro first
  if (showIntro) {
    return <LogoIntro onComplete={() => setShowIntro(false)} />;
  }

  if (isLoading) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/20 flex items-center justify-center">
          <CustomCursor />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center relative"
          >
            {/* Simplified Loading Spinner */}
            <motion.div className="relative mb-8">
              <motion.div
                className="w-12 h-12 border-4 border-gray-700 border-t-purple-500 rounded-full mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.3 }}
            >
              {t('loading.text', 'Loading...')}
            </motion.p>
            
            {/* Simplified Progress Indicator */}
            <motion.div
              className="w-32 h-1 bg-gray-800 rounded-full mx-auto mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900/20">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Particle System */}
        <ParticleSystem />
        
        {/* Navigation */}
        <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
        
        {/* Page Content with Enhanced Transitions */}
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1.05 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut",
              scale: { duration: 0.4 }
            }}
          >
            {renderPage()}
          </motion.main>
        </AnimatePresence>
        
        {/* Footer */}
        <Footer onPageChange={handlePageChange} />
        
        {/* Simplified Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.05) 0%, transparent 70%)",
                "radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.04) 0%, transparent 70%)",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

// Update the document title and favicon
if (typeof document !== 'undefined') {
  document.title = 'VisCend Studio | استوديو التميز البصري';
  
  // Remove existing favicons
  const existingFavicons = document.querySelectorAll("link[rel*='icon']");
  existingFavicons.forEach(favicon => favicon.remove());
  
  // Create the VisCend V-shaped logo favicon with proper encoding
  const favicon = document.createElement('link');
  favicon.type = 'image/svg+xml';
  favicon.rel = 'icon';
  
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="vGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#9333ea"/>
        <stop offset="50%" style="stop-color:#3b82f6"/>
        <stop offset="100%" style="stop-color:#10b981"/>
      </linearGradient>
    </defs>
    <rect width="32" height="32" fill="#000000"/>
    <path d="M8 8 L16 24 L24 8" stroke="url(#vGrad)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  
  favicon.href = 'data:image/svg+xml;base64,' + btoa(svgContent);
  document.head.appendChild(favicon);
}

export default App;
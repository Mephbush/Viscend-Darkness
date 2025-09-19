import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import logoImage from 'figma:asset/6bdbd6b0aa4ad785936e79c7baf77fd1254e3dc8.png';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.studio') },
    { id: 'services', label: t('nav.services') },
    { id: 'portfolio', label: t('nav.work') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-b border-gray-700/50 z-50 shadow-2xl shadow-purple-500/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer gap-3 group"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img 
                src={logoImage} 
                alt="VisCend Logo" 
                className="w-10 h-10 object-contain drop-shadow-lg" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <div className="relative">
              <span className="text-2xl font-black text-white tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text">VisCend</span>
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                initial={{ width: "100%" }}
                whileHover={{ width: "120%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className={`flex items-baseline ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-black transition-all duration-300 relative group cursor-pointer ${
                    currentPage === item.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ y: 0, scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentPage === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                      layoutId="navbar-indicator"
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              ))}
            </div>
            
            {/* Language Selector */}
            <LanguageSelector />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-800">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full ${isRTL ? 'text-right' : 'text-left'} px-3 py-2 text-base font-medium transition-colors duration-200 ${
                currentPage === item.id
                  ? 'text-white bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
              whileHover={{ x: isRTL ? -4 : 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
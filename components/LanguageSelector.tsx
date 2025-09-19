import { motion } from 'motion/react';
import { Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage, languages, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800/50 rounded-lg hover:bg-gray-700/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span>{languages[language].nativeName}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
          y: isOpen ? 0 : -10
        }}
        transition={{ duration: 0.2 }}
        className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 min-w-[160px] ${
          !isOpen ? 'pointer-events-none' : ''
        }`}
      >
        <div className="py-2">
          {Object.entries(languages).map(([code, { name, nativeName }]) => (
            <motion.button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center justify-between ${
                language === code
                  ? 'text-purple-400 bg-gray-800/50'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
              whileHover={{ x: isRTL ? -4 : 4 }}
            >
              <span>{nativeName}</span>
              {language === code && (
                <motion.div
                  className="w-2 h-2 bg-purple-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(true);
  const [clickEffect, setClickEffect] = useState<{x: number, y: number, id: number} | null>(null);
  const { isRTL, language } = useLanguage();

  // Mouse movement handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  // Hover detection
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check for interactive elements
    if (target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.dataset.cursor === 'pointer' ||
        target.role === 'button' ||
        target.tabIndex >= 0) {
      setIsHovering(true);
      setCursorVariant('button');
    } else if (target.tagName === 'INPUT' || 
               target.tagName === 'TEXTAREA' ||
               target.contentEditable === 'true' ||
               target.dataset.cursor === 'text') {
      setIsHovering(true);
      setCursorVariant('text');
    } else {
      setIsHovering(false);
      setCursorVariant('default');
    }
  }, []);

  // Click effect handler
  const handleClick = useCallback((e: MouseEvent) => {
    setClickEffect({
      x: e.clientX,
      y: e.clientY,
      id: Date.now()
    });
    
    setTimeout(() => setClickEffect(null), 500);
  }, []);

  // Initialize cursor visibility
  useEffect(() => {
    // Force visibility on mount - this is critical for Arabic language
    setIsVisible(true);
    
    const showCursor = () => setIsVisible(true);
    const hideCursor = () => setIsVisible(false);
    
    // Add event listeners with capture: true to ensure they fire
    document.addEventListener('mousemove', handleMouseMove, { passive: true, capture: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true, capture: true });
    document.addEventListener('click', handleClick, { passive: true, capture: true });
    document.addEventListener('mouseenter', showCursor, { passive: true, capture: true });
    document.addEventListener('mouseleave', hideCursor, { passive: true, capture: true });
    
    // Fallback: check periodically to ensure cursor is visible
    const visibilityCheck = setInterval(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 1000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
      clearInterval(visibilityCheck);
    };
  }, [handleMouseMove, handleMouseOver, handleClick]);

  // Force cursor visibility when language changes - especially for Arabic
  useEffect(() => {
    setIsVisible(true);
    // Force a re-render after language change
    const timer = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setIsVisible(true), 300);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [language, isRTL]);

  // Cursor variants with perfect centering
  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
      backgroundColor: "rgba(147, 51, 234, 0.8)",
      mixBlendMode: "screen" as const,
      borderRadius: "50%",
    },
    button: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 2.5,
      backgroundColor: "rgba(59, 130, 246, 0.7)",
      mixBlendMode: "screen" as const,
      borderRadius: "50%",
    },
    text: {
      x: mousePosition.x - 1,
      y: mousePosition.y - 16,
      scaleX: 0.3,
      scaleY: 2.2,
      backgroundColor: "rgba(16, 185, 129, 0.8)",
      mixBlendMode: "screen" as const,
      borderRadius: "20%",
    }
  };

  // Always render the cursor with forced visibility
  return (
    <div 
      style={{ 
        display: 'block', 
        opacity: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '100vw',
        height: '100vh'
      }}
    >
      {/* Main Cursor - perfectly centered */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{ 
          width: '20px', 
          height: '20px',
          display: 'block'
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.2
        }}
        style={{
          filter: `drop-shadow(0 0 12px ${
            cursorVariant === 'button' ? 'rgba(59, 130, 246, 0.7)' :
            cursorVariant === 'text' ? 'rgba(16, 185, 129, 0.7)' :
            'rgba(147, 51, 234, 0.7)'
          })`,
        }}
      />
      
      {/* Outer Ring - perfectly centered */}
      <motion.div
        className="fixed pointer-events-none z-[9997] border rounded-full"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
          scale: isHovering ? 1.5 : 1,
          borderColor: cursorVariant === 'button' ? "rgba(59, 130, 246, 0.5)" :
                       cursorVariant === 'text' ? "rgba(16, 185, 129, 0.5)" :
                       "rgba(147, 51, 234, 0.5)",
          width: 60,
          height: 60,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        style={{
          borderWidth: "2px",
        }}
      />

      {/* Inner Core - perfectly centered */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full bg-white"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isHovering ? 1.5 : 1,
          width: 4,
          height: 4,
          opacity: isHovering ? 0.9 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 40,
        }}
        style={{
          filter: "blur(0.5px)",
          mixBlendMode: "screen"
        }}
      />

      {/* Glow Effect - perfectly centered */}
      <motion.div
        className="fixed pointer-events-none z-[9996] rounded-full blur-md"
        animate={{
          x: mousePosition.x - 35,
          y: mousePosition.y - 35,
          scale: isHovering ? 1.3 : 1,
          width: 70,
          height: 70,
          backgroundColor: cursorVariant === 'button' ? "rgba(59, 130, 246, 0.25)" : 
                          cursorVariant === 'text' ? "rgba(16, 185, 129, 0.25)" :
                          "rgba(147, 51, 234, 0.25)",
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Click Effect - perfectly centered */}
      <AnimatePresence>
        {clickEffect && (
          <motion.div
            key={`click-${clickEffect.id}`}
            className="fixed pointer-events-none z-[9999] rounded-full border-2"
            style={{
              x: clickEffect.x - 35,
              y: clickEffect.y - 35,
              width: 70,
              height: 70,
              borderColor: cursorVariant === 'button' ? 'rgba(59, 130, 246, 0.8)' :
                          cursorVariant === 'text' ? 'rgba(16, 185, 129, 0.8)' :
                          'rgba(147, 51, 234, 0.8)',
            }}
            initial={{ scale: 0, opacity: 1, rotate: 0 }}
            animate={{ 
              scale: 1.2, 
              opacity: 0,
              rotate: 180
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          />
        )}
      </AnimatePresence>

      {/* Button Magnetic Effect - perfectly centered */}
      {cursorVariant === 'button' && (
        <motion.div
          className="fixed pointer-events-none z-[9993] rounded-full"
          animate={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            width: 100,
            height: 100,
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            opacity: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            default: {
              type: "spring",
              stiffness: 200,
              damping: 25
            }
          }}
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
            filter: "blur(12px)"
          }}
        />
      )}
    </div>
  );
}
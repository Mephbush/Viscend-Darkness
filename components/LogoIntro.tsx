import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import logoImage from 'figma:asset/6bdbd6b0aa4ad785936e79c7baf77fd1254e3dc8.png';

interface LogoIntroProps {
  onComplete: () => void;
}

export function LogoIntro({ onComplete }: LogoIntroProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 5000);
      }}
    >
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 80%)",
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      <div className="text-center relative z-10">
        {/* Logo Formation Animation */}
        <motion.div
          className="relative mb-16 w-48 h-48 md:w-64 md:h-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Particle Formation - Creating logo shape */}
          {[...Array(60)].map((_, i) => {
            // Create particles that form the general shape of a logo
            const angle = (i / 60) * Math.PI * 2;
            const radius = 60 + Math.sin(i * 0.3) * 20;
            const finalX = Math.cos(angle) * radius;
            const finalY = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: `hsl(${240 + i * 2}, 70%, 60%)`,
                  boxShadow: `0 0 8px hsl(${240 + i * 2}, 70%, 60%)`,
                  top: '50%',
                  left: '50%',
                }}
                initial={{
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 600,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: finalX,
                  y: finalY,
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.02,
                  ease: [0.19, 1, 0.22, 1]
                }}
              />
            );
          })}

          {/* Secondary particles for more complexity */}
          {[...Array(30)].map((_, i) => {
            const angle = (i / 30) * Math.PI * 2;
            const radius = 40;
            const finalX = Math.cos(angle) * radius;
            const finalY = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={`inner-particle-${i}`}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: `linear-gradient(45deg, #9333ea, #3b82f6)`,
                  boxShadow: `0 0 12px #9333ea`,
                  top: '50%',
                  left: '50%',
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: finalX,
                  y: finalY,
                  scale: [0, 2, 1],
                  opacity: [0, 1, 0.9],
                }}
                transition={{
                  duration: 1.5,
                  delay: 1 + i * 0.03,
                  ease: "easeOut"
                }}
              />
            );
          })}

          {/* Central energy core */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div
              className="w-6 h-6 bg-white rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [1, 0.8, 1],
                boxShadow: [
                  "0 0 20px #ffffff",
                  "0 0 40px #9333ea, 0 0 60px #3b82f6",
                  "0 0 20px #ffffff"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Logo reveal */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 2.5, 
              duration: 1.5,
              ease: [0.19, 1, 0.22, 1]
            }}
          >
            <motion.img
              src={logoImage}
              alt="VisCend Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))",
                  "drop-shadow(0 0 40px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.6))",
                  "drop-shadow(0 0 30px rgba(147, 51, 234, 0.7))"
                ],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Dissolving particles effect */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`dissolve-${i}`}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 3.8 + i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Energy waves */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute border-2 border-purple-500/30 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              initial={{
                width: '0px',
                height: '0px',
                opacity: 0,
              }}
              animate={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2,
                delay: 2.8 + i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>

        {/* Brand Name with Formation Effect */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 3,
            ease: [0.19, 1, 0.22, 1]
          }}
        >
          {/* Letter by letter formation */}
          <div className="flex justify-center items-center space-x-2">
            {['V', 'i', 's', 'C', 'e', 'n', 'd'].map((letter, i) => (
              <motion.span
                key={i}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.5,
                  rotateY: 180
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  rotateY: 0
                }}
                transition={{
                  duration: 0.6,
                  delay: 3.2 + i * 0.1,
                  ease: [0.19, 1, 0.22, 1]
                }}
                style={{
                  textShadow: `0 0 20px rgba(147, 51, 234, 0.5)`,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.p 
            className="text-gray-300 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 4,
            }}
          >
            {t('intro.subtitle', 'استوديو التميز البصري')}
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-gray-800/50 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '16rem' }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 3.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="text-gray-400 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2, 
            delay: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {t('loading.preparing', 'جاري التحضير...')}
        </motion.p>
      </div>
    </motion.div>
  );
}
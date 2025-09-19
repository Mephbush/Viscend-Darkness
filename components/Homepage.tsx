import { motion } from 'motion/react';
import { ArrowRight, Play, Zap, Eye, Palette, Video } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface HomepageProps {
  onPageChange: (page: string) => void;
}

export function Homepage({ onPageChange }: HomepageProps) {
  const { t, isRTL } = useLanguage();
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('services.3d.title'),
      description: t('services.3d.description'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: t('services.video.title'),
      description: t('services.video.description'),
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: t('services.vfx.title'),
      description: t('services.vfx.description'),
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t('services.identity.title'),
      description: t('services.identity.description'),
      gradient: "from-orange-400 to-red-500"
    }
  ];

  const projects = [
    {
      title: t('project.neural_networks.title'),
      category: t('services.3d.title'),
      image: "https://images.unsplash.com/photo-1641738156783-df2049630f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMGFic3RyYWN0fGVufDF8fHx8MTc1NjgxOTE4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('project.neural_networks.description')
    },
    {
      title: t('project.kinetic_energy.title'),
      category: t('services.vfx.title'),
      image: "https://images.unsplash.com/photo-1740174459691-5b93c2fa0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHZpc3VhbCUyMGVmZmVjdHN8ZW58MXx8fHwxNzU2ODE5MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('project.kinetic_energy.description')
    },
    {
      title: t('project.cinema_verite.title'),
      category: t('services.video.title'),
      image: "https://images.unsplash.com/photo-1591033013778-ef2a8eb08bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU2ODE5MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('project.cinema_verite.description')
    }
  ];

  const testimonials = [
    {
      quote: t('testimonial.sarah.quote'),
      author: t('testimonial.sarah.author'),
      company: t('testimonial.sarah.company')
    },
    {
      quote: t('testimonial.marcus.quote'),
      author: t('testimonial.marcus.author'),
      company: t('testimonial.marcus.company')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/10 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
        
        <motion.div 
          className="relative z-10 text-center max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className={`text-6xl md:text-8xl font-black tracking-tighter mb-6 ${isRTL ? 'text-right' : ''}`}>
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                {t('home.hero.title')}
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t('home.hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => onPageChange('portfolio')}
                className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-500 text-white border-0 px-10 py-7 text-lg font-black group shadow-2xl shadow-purple-500/25 animate-pulse-glow cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {t('home.hero.cta1')}
                  <ArrowRight className={`${isRTL ? 'mr-3 rotate-180' : 'ml-3'} w-5 h-5 group-hover:translate-x-2 transition-transform duration-300`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => onPageChange('contact')}
                variant="outline"
                className="relative border-2 border-gray-500 bg-black/50 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-400 px-10 py-7 text-lg font-black group shadow-2xl cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Play className={`${isRTL ? 'ml-3' : 'mr-3'} w-5 h-5 group-hover:scale-125 transition-transform duration-300`} />
                  {t('home.hero.cta2')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight ${isRTL ? 'text-right' : ''}`}>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('home.philosophy.title')}</span>
            </h2>
            <p className={`text-xl text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t('home.philosophy.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t('home.services.title')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => onPageChange('services')}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-gray-600 group-hover:bg-gray-800/50">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                    {t('home.services.learn_more')} <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} w-4 h-4 group-hover:translate-x-1 transition-transform`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t('home.projects.title')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('home.projects.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => onPageChange('portfolio')}
              >
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-purple-400">{project.category}</div>
                  <h3 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => onPageChange('portfolio')}
                className="relative bg-gradient-to-r from-gray-800 to-gray-900 hover:from-purple-600 hover:to-cyan-600 text-white border-2 border-gray-600 hover:border-purple-400 px-10 py-4 text-lg font-black group shadow-xl cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {t('home.projects.view_all')}
                  <ArrowRight className={`${isRTL ? 'mr-3 rotate-180' : 'ml-3'} w-5 h-5 group-hover:translate-x-2 transition-transform duration-300`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t('home.testimonials.title')}</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                  <div className="text-6xl text-purple-500/20 font-serif mb-4">"</div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="border-t border-gray-800 pt-6">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
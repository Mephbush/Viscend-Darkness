import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowUp, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import logoImage from 'figma:asset/01067348abe52394c98f0dadfd32512ba80dc776.png';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const { t, isRTL } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { label: t('nav.studio'), page: "about" },
    { label: t('nav.services'), page: "services" },
    { label: t('nav.work'), page: "portfolio" },
    { label: t('nav.contact'), page: "contact" }
  ];

  const services = [
    t('services.3d.title'),
    t('services.video.title'), 
    t('services.vfx.title'),
    t('services.identity.title')
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6 flex items-center gap-3">
                <img 
                  src={logoImage} 
                  alt="VisCend Logo" 
                  className="w-10 h-10 object-contain" 
                />
                <div className="relative">
                  <span className="text-4xl font-black text-white tracking-tighter">VisCend</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400"></div>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-md">
                Next-generation creative visual studio specializing in transforming bold ideas into extraordinary experiences through 3D, motion, and design.
              </p>
              <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                Design to Rise
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href="mailto:hello@viscendstudio.com" className="text-gray-300 hover:text-white transition-colors">
                    hello@viscendstudio.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Los Angeles, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black mb-6">{t('footer.navigation', 'التنقل')}</h3>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onPageChange(link.page)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black mb-6">{t('nav.services', 'الخدمات')}</h3>
            <div className="space-y-4">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => onPageChange('services')}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {service}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Links & CTA */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6">
            <span className="text-gray-400 font-medium">{t('footer.follow_us', 'تابعونا')}</span>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 rounded-full flex items-center justify-center transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <Button
            onClick={() => onPageChange('contact')}
            className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white border-0 px-8 py-3 font-semibold"
          >
            Start Your Project
          </Button>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>© 2024 {t('footer.studio', 'استوديو VisCend')}. {t('footer.rights', 'جميع الحقوق محفوظة.')}</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-400"
            >
              ♥
            </motion.span>
            <span>in Los Angeles</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
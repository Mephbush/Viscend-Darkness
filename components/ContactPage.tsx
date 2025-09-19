import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MessageCircle, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactPage() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budgetRange: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-3a888ed2/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budgetRange: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const projectTypes = [
    "3D Production",
    "Video Advertising", 
    "Visual Effects",
    "Visual Identity Design",
    "Custom Project",
    "Not Sure Yet"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Let's Discuss"
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@viscendstudio.com",
      action: "mailto:hello@viscendstudio.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Los Angeles, CA",
      action: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={`text-5xl md:text-7xl font-black mb-8 tracking-tighter ${isRTL ? 'text-right' : ''}`}>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('contact.title')}</span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 ${isRTL ? 'rtl' : ''}`}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={isRTL ? 'order-2' : ''}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h2 className={`text-3xl font-black mb-8 text-white ${isRTL ? 'text-right' : ''}`}>
                  {t('contact.form.tell_us')}
                </h2>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className={`text-green-400 ${isRTL ? 'text-right' : ''}`}>{statusMessage}</p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className={`text-red-400 ${isRTL ? 'text-right' : ''}`}>{statusMessage}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={`text-white ${isRTL ? 'text-right' : ''}`}>
                        {t('contact.form.name')} *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                        placeholder={t('contact.form.name')}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={`text-white ${isRTL ? 'text-right' : ''}`}>
                        {t('contact.form.email')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                        placeholder={t('contact.form.email')}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className={`text-white ${isRTL ? 'text-right' : ''}`}>Project Type</Label>
                      <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-white hover:bg-gray-700">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className={`text-white ${isRTL ? 'text-right' : ''}`}>Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange('budgetRange', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range} className="text-white hover:bg-gray-700">
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className={`text-white ${isRTL ? 'text-right' : ''}`}>
                      {t('contact.form.message')} *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 resize-none"
                      placeholder={t('contact.form.message')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      className={`w-full relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-500 text-white border-0 py-4 font-black group disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-purple-500/25 cursor-pointer overflow-hidden ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <span className={`relative z-10 flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className={`w-6 h-6 border-3 border-white border-t-transparent rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}
                          />
                        ) : (
                          <Send className={`${isRTL ? 'ml-3 rotate-180' : 'mr-3'} w-6 h-6 group-hover:${isRTL ? '-translate-x-2' : 'translate-x-2'} transition-transform duration-300`} />
                        )}
                        {isSubmitting ? 'Sending Message...' : t('contact.form.send')}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <p className={`text-sm text-gray-400 ${isRTL ? 'text-right' : ''}`}>
                    <strong className="text-white">What happens next?</strong><br />
                    We'll review your project details and get back to you within 24 hours with a personalized proposal and timeline.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`space-y-8 ${isRTL ? 'order-1' : ''}`}
            >
              <div>
                <h2 className={`text-3xl font-black mb-6 text-white ${isRTL ? 'text-right' : ''}`}>
                  Get in Touch
                </h2>
                <p className={`text-lg text-gray-300 leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}>
                  Every great project begins with a conversation. Whether you have a detailed brief or just the spark of an idea, we're here to help you explore the possibilities.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.action}
                    className="block group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 group-hover:border-gray-600 group-hover:bg-gray-800/50 group-hover:transform group-hover:scale-105">
                      <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          {contact.icon}
                        </div>
                        <div className={isRTL ? 'text-right' : ''}>
                          <h3 className="font-semibold text-white mb-1">{contact.title}</h3>
                          <p className="text-gray-400 group-hover:text-white transition-colors">{contact.details}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h3 className={`text-xl font-black mb-6 text-white ${isRTL ? 'text-right' : ''}`}>
                  Why Choose VisCend?
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      24h
                    </div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      50+
                    </div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      5★
                    </div>
                    <div className="text-sm text-gray-400">Average Rating</div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h3 className={`text-xl font-black mb-6 text-white ${isRTL ? 'text-right' : ''}`}>
                  Frequently Asked
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold text-white mb-2 ${isRTL ? 'text-right' : ''}`}>
                      How long do projects typically take?
                    </h4>
                    <p className={`text-sm text-gray-400 ${isRTL ? 'text-right' : ''}`}>
                      Project timelines vary from 2-10 weeks depending on scope and complexity. We'll provide a detailed timeline during our consultation.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-white mb-2 ${isRTL ? 'text-right' : ''}`}>
                      Do you work internationally?
                    </h4>
                    <p className={`text-sm text-gray-400 ${isRTL ? 'text-right' : ''}`}>
                      Absolutely! We collaborate with clients worldwide through digital-first workflows and virtual meetings.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-white mb-2 ${isRTL ? 'text-right' : ''}`}>
                      What file formats do you deliver?
                    </h4>
                    <p className={`text-sm text-gray-400 ${isRTL ? 'text-right' : ''}`}>
                      We deliver in all industry-standard formats optimized for your specific use case, plus provide source files when appropriate.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-12">
              <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className={`text-3xl font-black mb-4 text-white ${isRTL ? 'text-right' : ''}`}>
                Stay in the Loop
              </h2>
              <p className={`text-lg text-gray-300 mb-8 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
                Get exclusive insights into our creative process, behind-the-scenes content, and early access to new services.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                />
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-500 text-white border-0 px-8 py-3 font-black whitespace-nowrap cursor-pointer shadow-lg overflow-hidden">
                    <span className="relative z-10">Subscribe</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
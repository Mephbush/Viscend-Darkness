import { motion } from 'motion/react';
import { Zap, Video, Eye, Palette, ArrowRight, Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: t('services.3d.title'),
      description: t('services.3d.description'),
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Product Visualization",
        "Architectural Rendering", 
        "Character Design & Animation",
        "Environment Creation",
        "Technical Illustration",
        "VR/AR Ready Assets"
      ],
      deliverables: [
        "4K/8K Render Sequences",
        "Interactive 3D Models",
        "Animation Files",
        "Source Project Files"
      ],
      timeline: "2-6 weeks",
      startingPrice: "$2,500"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: t('services.video.title'),
      description: t('services.video.description'),
      gradient: "from-cyan-400 to-blue-500",
      features: [
        "Commercial Production",
        "Brand Films",
        "Social Media Content",
        "Explainer Videos",
        "Product Launches",
        "Event Documentation"
      ],
      deliverables: [
        "Multi-Format Deliveries",
        "Raw Footage Access",
        "Color-Graded Masters",
        "Social Media Cuts"
      ],
      timeline: "3-8 weeks",
      startingPrice: "$5,000"
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: t('services.vfx.title'),
      description: t('services.vfx.description'),
      gradient: "from-green-400 to-teal-500",
      features: [
        "Compositing & Integration",
        "Motion Graphics",
        "Particle Systems",
        "Digital Environments",
        "Character Enhancement",
        "Impossible Scenarios"
      ],
      deliverables: [
        "Finished Composite",
        "Element Breakdowns",
        "Project Files",
        "Making-of Documentation"
      ],
      timeline: "2-10 weeks",
      startingPrice: "$3,000"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: t('services.identity.title'),
      description: t('services.identity.description'),
      gradient: "from-orange-400 to-red-500",
      features: [
        "Logo Design & Branding",
        "Brand Guidelines",
        "Marketing Materials",
        "Digital Assets",
        "Packaging Design",
        "Environmental Graphics"
      ],
      deliverables: [
        "Brand Style Guide",
        "Logo Variations",
        "Asset Library",
        "Implementation Examples"
      ],
      timeline: "3-5 weeks",
      startingPrice: "$1,500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Starting at $1,500",
      description: "Perfect for small businesses and startups looking to make a strong first impression.",
      features: [
        "Single service focus",
        "Basic revision rounds",
        "Standard delivery timeline", 
        "Digital delivery only",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "Starting at $5,000",
      description: "Ideal for established businesses ready to elevate their visual presence.",
      features: [
        "Multi-service integration",
        "Unlimited revisions",
        "Priority timeline",
        "Physical & digital delivery",
        "Dedicated project manager",
        "Strategic consultation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom Pricing", 
      description: "Comprehensive solutions for large organizations with complex visual needs.",
      features: [
        "Full-scale campaigns",
        "Custom workflow integration",
        "24/7 support access",
        "On-site collaboration",
        "Multi-platform deployment",
        "Ongoing partnership"
      ],
      popular: false
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
              <span className="text-gray-500">{t('nav.services')}</span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> {t('home.services.title')}</span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-gray-600 group-hover:bg-gray-800/50">
                  {/* Header */}
                  <div className={`flex items-start gap-6 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} group-hover:scale-110 transition-transform duration-200`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-black mb-3 text-white ${isRTL ? 'text-right' : ''}`}>{service.title}</h3>
                      <p className={`text-gray-400 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{service.description}</p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className={`text-sm text-gray-300 ${isRTL ? 'text-right' : ''}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <h4 className={`font-semibold text-white mb-3 ${isRTL ? 'text-right' : ''}`}>Key Deliverables</h4>
                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                      {service.deliverables.map((deliverable) => (
                        <Badge key={deliverable} variant="outline" className="border-gray-600 text-gray-300">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className={`flex items-center justify-between pt-6 border-t border-gray-800 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={isRTL ? 'text-right' : ''}>
                      <div className="text-sm text-gray-400">Starting at</div>
                      <div className="text-2xl font-black text-white">{service.startingPrice}</div>
                      <div className="text-sm text-gray-400">{service.timeline}</div>
                    </div>
                    <Button 
                      onClick={() => onPageChange('contact')}
                      className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 group ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {t('common.get_quote')}
                      <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} w-4 h-4 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects Section */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight ${isRTL ? 'text-right' : ''}`}>Beyond Categories</h2>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              Have a vision that doesn't fit into traditional categories? We specialize in bringing 
              impossible ideas to life through custom creative solutions and cutting-edge innovation.
            </p>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-400 mb-2">∞</div>
                  <div className="font-semibold text-white mb-1">Unlimited Possibilities</div>
                  <div className="text-sm text-gray-400">No creative boundaries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-cyan-400 mb-2">1:1</div>
                  <div className="font-semibold text-white mb-1">Dedicated Partnership</div>
                  <div className="text-sm text-gray-400">Personal creative guidance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">✓</div>
                  <div className="font-semibold text-white mb-1">Proven Results</div>
                  <div className="text-sm text-gray-400">Award-winning outcomes</div>
                </div>
              </div>
              <Button 
                onClick={() => onPageChange('contact')}
                size="lg"
                className={`bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white border-0 px-8 py-3 font-semibold group ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                Discuss Custom Project
                <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} w-5 h-5 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${isRTL ? 'text-right' : ''}`}>Investment Levels</h2>
            <p className={`text-xl text-gray-400 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              Flexible engagement models designed to match your project scope and ambitions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group ${tier.popular ? 'lg:scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-300 ${
                  tier.popular 
                    ? 'border-purple-500/50 bg-purple-900/10' 
                    : 'border-gray-800 group-hover:border-gray-600 group-hover:bg-gray-800/50'
                }`}>
                  <div className={`text-center mb-8 ${isRTL ? 'text-right' : ''}`}>
                    <h3 className="text-2xl font-black mb-2 text-white">{tier.name}</h3>
                    <div className="text-3xl font-black mb-4">
                      <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{tier.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <div key={feature} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className={`text-gray-300 ${isRTL ? 'text-right' : ''}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => onPageChange('contact')}
                    className={`w-full font-semibold ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white border-0'
                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                    }`}
                  >
                    {tier.name === 'Enterprise' ? t('common.contact_us') : t('common.get_started')}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${isRTL ? 'text-right' : ''}`}>How We Work</h2>
            <p className={`text-xl text-gray-400 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              A refined creative process that ensures exceptional results every time
            </p>
          </motion.div>

          <div className={`grid md:grid-cols-4 gap-8 ${isRTL ? 'rtl' : ''}`}>
            {[
              { step: "01", title: "Discovery", description: "Deep dive into your vision, goals, and creative requirements" },
              { step: "02", title: "Strategy", description: "Develop comprehensive creative strategy and project roadmap" },
              { step: "03", title: "Creation", description: "Execute with precision using cutting-edge tools and techniques" },
              { step: "04", title: "Delivery", description: "Polish to perfection and deliver results that exceed expectations" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black group-hover:scale-110 transition-transform duration-200">
                  {process.step}
                </div>
                <h3 className={`text-xl font-black mb-3 text-white ${isRTL ? 'text-right' : ''}`}>{process.title}</h3>
                <p className={`text-gray-400 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
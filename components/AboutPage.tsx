import { motion } from 'motion/react';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutPage() {
  const { t, isRTL } = useLanguage();
  
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creativity",
      description: "We push the boundaries of what's possible, transforming abstract concepts into tangible visual experiences that captivate and inspire."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Clarity", 
      description: "Every visual element serves a purpose. We believe in intentional design that communicates with precision and eliminates confusion."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and pioneering techniques to deliver solutions that set new industry standards."
    }
  ];

  const philosophy = [
    {
      title: "Design is Strategy",
      description: "Visual design isn't decoration—it's strategic communication that guides perception and drives action."
    },
    {
      title: "Motion is Momentum", 
      description: "Movement creates emotional connection and narrative flow that static imagery simply cannot achieve."
    },
    {
      title: "Story is Architecture",
      description: "Every great visual experience is built on a foundation of compelling narrative structure and purposeful storytelling."
    }
  ];

  const roadmapItems = [
    {
      phase: "Foundation",
      title: "Independent Studio Launch",
      description: "Established VisCend as a boutique creative studio focused on next-generation visual experiences.",
      status: "Complete"
    },
    {
      phase: "Expansion", 
      title: "Service Diversification",
      description: "Expanded from 3D production to full-spectrum visual services including VFX, branding, and commercial work.",
      status: "Complete"
    },
    {
      phase: "Innovation",
      title: "AI-Powered Workflows",
      description: "Integrating artificial intelligence and machine learning to enhance creative processes and efficiency.",
      status: "In Progress"
    },
    {
      phase: "Future",
      title: "Global Creative Network",
      description: "Building a worldwide community of visionary creators and establishing VisCend as a household name in visual innovation.",
      status: "Planned"
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
              <span className="text-gray-500">{t('about.hero.title')}</span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio Story */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'rtl' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={isRTL ? 'order-2' : ''}
            >
              <h2 className={`text-4xl font-black mb-8 tracking-tight ${isRTL ? 'text-right' : ''}`}>
                {t('about.story.title')}
              </h2>
              <div className={`space-y-6 text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                <p>
                  VisCend Studio was founded on a simple yet revolutionary premise: that bold ideas deserve equally bold visual representation. In a world saturated with generic content, we saw an opportunity to create something different—something that would make audiences stop, think, and feel.
                </p>
                <p>
                  Our name combines "Visual" and "Ascend," representing our mission to elevate every project beyond the ordinary. We're not just creating visuals; we're crafting experiences that resonate, inspire, and drive meaningful action.
                </p>
                <p>
                  As an independent studio, we maintain the agility to take creative risks and the freedom to pursue perfection without compromise. Every project is an opportunity to push boundaries and redefine what's possible in visual storytelling.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`relative ${isRTL ? 'order-1' : ''}`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731917668002-3350dfae3464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NTY4MTkxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="VisCend Studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-gradient-to-br from-purple-500 to-cyan-400 rounded-xl p-6 backdrop-blur-sm`}>
                <div className="text-2xl font-black text-white">{t('home.tagline')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${isRTL ? 'text-right' : ''}`}>
              Our Philosophy
            </h2>
            <p className={`text-xl text-gray-400 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              Three core principles that guide every creative decision we make
            </p>
          </motion.div>

          <div className={`grid md:grid-cols-3 gap-8 ${isRTL ? 'rtl' : ''}`}>
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-gray-600 group-hover:bg-gray-800/50">
                  <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${isRTL ? 'text-right' : ''}`}>
              Core Values
            </h2>
            <p className={`text-xl text-gray-400 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              The principles that define how we approach every project and relationship
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-gray-600 group-hover:bg-gray-800/50 group-hover:transform group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 ${isRTL ? 'ml-auto' : ''}`}>
                    {value.icon}
                  </div>
                  <h3 className={`text-2xl font-black mb-4 text-white ${isRTL ? 'text-right' : ''}`}>{value.title}</h3>
                  <p className={`text-gray-400 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Roadmap */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${isRTL ? 'text-right' : ''}`}>
              Vision Roadmap
            </h2>
            <p className={`text-xl text-gray-400 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              Our journey from independent startup to industry innovator
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute ${isRTL ? 'right-8' : 'left-8'} top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-400 hidden md:block`}></div>
            
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${isRTL ? 'md:mr-20' : 'md:ml-20'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute ${isRTL ? '-right-20' : '-left-20'} top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full hidden md:block`}></div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                    <div className={`flex flex-col md:flex-row md:items-center justify-between mb-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                      <div className={isRTL ? 'text-right' : ''}>
                        <div className="text-sm font-medium text-purple-400 mb-2">{item.phase}</div>
                        <h3 className="text-2xl font-black text-white">{item.title}</h3>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium mt-4 md:mt-0 w-fit ${
                        item.status === 'Complete' 
                          ? 'bg-green-900/50 text-green-400 border border-green-800' 
                          : item.status === 'In Progress'
                          ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-800'
                          : 'bg-gray-800/50 text-gray-400 border border-gray-700'
                      } ${isRTL ? 'mr-auto' : ''}`}>
                        {item.status}
                      </div>
                    </div>
                    <p className={`text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight ${isRTL ? 'text-right' : ''}`}>
              The Visionaries
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-12">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <p className={`text-xl text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                Our team of passionate creators, innovators, and storytellers is currently expanding. 
                We're building a collective of visionary minds who share our commitment to pushing 
                the boundaries of visual excellence.
              </p>
              <div className={`mt-8 text-purple-400 font-semibold ${isRTL ? 'text-right' : ''}`}>
                Join us in shaping the future of visual storytelling.
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
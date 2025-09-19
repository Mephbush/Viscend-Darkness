import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, ExternalLink, Calendar, Award } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface PortfolioPageProps {
  onPageChange: (page: string) => void;
}

export function PortfolioPage({ onPageChange }: PortfolioPageProps) {
  const { t, isRTL } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Neural Networks",
      category: "3D Production",
      client: "TechFlow Industries",
      year: "2024",
      description: "Cutting-edge 3D visualization of AI neural networks for a tech startup's product launch campaign.",
      image: "https://images.unsplash.com/photo-1641738156783-df2049630f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMGFic3RyYWN0fGVufDF8fHx8MTc1NjgxOTE4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["3D Modeling", "Motion Graphics", "VFX"],
      featured: true
    },
    {
      id: 2,
      title: "Kinetic Energy",
      category: "VFX",
      client: "Nexus Creative",
      year: "2024",
      description: "Dynamic motion graphics and visual effects for an energy company's brand transformation.",
      image: "https://images.unsplash.com/photo-1740174459691-5b93c2fa0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHZpc3VhbCUyMGVmZmVjdHN8ZW58MXx8fHwxNzU2ODE5MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["VFX", "Compositing", "Animation"],
      featured: true
    },
    {
      id: 3,
      title: "Cinema Verite",
      category: "Video Ads",
      client: "Luxury Brand",
      year: "2024",
      description: "Cinematic commercial series showcasing luxury products with Hollywood-grade production quality.",
      image: "https://images.unsplash.com/photo-1591033013778-ef2a8eb08bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU2ODE5MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Video Production", "Color Grading", "Sound Design"],
      featured: true
    },
    {
      id: 4,
      title: "Digital Transformation",
      category: "Visual Identity",
      client: "Startup Inc",
      year: "2023",
      description: "Complete brand identity and visual system for a digital transformation consultancy.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NjgxOTE4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Brand Identity", "Logo Design", "Typography"],
      featured: false
    },
    {
      id: 5,
      title: "Cosmic Journey",
      category: "3D Production",
      client: "Space Agency",
      year: "2023",
      description: "Immersive 3D experience showcasing space exploration missions and cosmic phenomena.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMDNkJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTY4MTkxODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["3D Animation", "Particle Systems", "Simulation"],
      featured: false
    },
    {
      id: 6,
      title: "Motion Symphony",
      category: "Motion Graphics",
      client: "Music Festival",
      year: "2023",
      description: "Rhythmic motion graphics synchronized with music for festival branding and stage visuals.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljc3xlbnwxfHx8fDE3NTY4MTkxODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Motion Graphics", "Audio Sync", "Live Visuals"],
      featured: false
    }
  ];

  const categories = ["All", "3D Production", "VFX", "Video Ads", "Visual Identity", "Motion Graphics"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const awards = [
    { name: "Best 3D Animation", year: "2024", organization: "Digital Arts Awards" },
    { name: "Outstanding VFX", year: "2024", organization: "Creative Industry Awards" },
    { name: "Brand Identity Excellence", year: "2023", organization: "Design Masters" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/10 text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={`text-5xl md:text-7xl font-black mb-8 tracking-tighter ${isRTL ? 'text-right' : ''}`}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                {t('portfolio.title')}
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              {t('portfolio.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-wrap ${isRTL ? 'justify-end' : 'justify-center'} gap-4 mb-16`}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-black transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-8 text-center ${isRTL ? 'text-right' : ''}`}>
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-gray-600 group-hover:bg-gray-800/50 animate-pulse-glow">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    {project.featured && (
                      <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                        <div className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-black">
                          Featured
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="text-sm font-black text-purple-400">{project.category}</div>
                      <div className={`flex items-center text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Calendar className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                        {project.year}
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-black text-white group-hover:text-purple-400 transition-colors ${isRTL ? 'text-right' : ''}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-gray-400 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{project.description}</p>
                    
                    <div className={`text-sm text-gray-500 ${isRTL ? 'text-right' : ''}`}>
                      <strong className="text-gray-300">Client:</strong> {project.client}
                    </div>
                    
                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Project Button */}
                    <div className="pt-4">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          variant="outline"
                          className={`w-full border-gray-600 text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-400 font-black cursor-pointer group/btn ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          <span className={`flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                            {t('common.view_project')}
                            <ExternalLink className={`${isRTL ? 'mr-2' : 'ml-2'} w-4 h-4 group-hover/btn:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
                          </span>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-8 ${isRTL ? 'text-right' : ''}`}>
              Awards & Recognition
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              Our work has been recognized by industry leaders and award organizations worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center group hover:border-gray-600 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-black text-white mb-2 ${isRTL ? 'text-right' : ''}`}>{award.name}</h3>
                <p className={`text-gray-400 mb-1 ${isRTL ? 'text-right' : ''}`}>{award.organization}</p>
                <p className={`text-purple-400 font-black ${isRTL ? 'text-right' : ''}`}>{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-8 ${isRTL ? 'text-right' : ''}`}>
              Ready to Create Something Amazing?
            </h2>
            <p className={`text-xl text-gray-300 mb-12 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              Let's collaborate to bring your vision to life with the same passion and expertise you've seen in our work.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => onPageChange('contact')}
                className={`relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-500 text-white border-0 px-12 py-6 text-xl font-black group shadow-2xl shadow-purple-500/25 cursor-pointer overflow-hidden ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <span className={`relative z-10 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('contact.title')}
                  <ArrowRight className={`${isRTL ? 'mr-3 rotate-180' : 'ml-3'} w-6 h-6 group-hover:${isRTL ? '-translate-x-2' : 'translate-x-2'} transition-transform duration-300`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
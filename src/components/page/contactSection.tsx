import React, { useEffect, useState } from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Mail, Phone, Github, Linkedin, Youtube, Send, Sparkles } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stars, setStars] = useState<Array<{
    id: number,
    left: string,
    top: string,
    size: string,
    color: string,
    delay: string,
    duration: string
  }>>([]);

  useEffect(() => {
    // Generate stars for background
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      color: ['#ffffff', '#00cfff', '#a259ff', '#7df9ff'][Math.floor(Math.random() * 4)],
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 3 + 2}s`
    }));
    setStars(generatedStars);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement toast notification here)
    alert('Message sent to space! 🚀 I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bananammm0001@gmail.com',
      link: 'mailto:bananammm0001@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0901834036',
      link: 'tel:0901834036'
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/unikonkon',
      color: 'hover:text-purple-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/suthep-jantawee/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      label: 'Youtube',
      link: 'https://www.youtube.com/@faradaybanana',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      
      {/* Deep Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, #0b0f2a 0%, #000000 50%, #0d1b2a 100%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(162, 89, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 207, 255, 0.08) 0%, transparent 50%)'
          }}
        />
        
        {/* Animated Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              background: star.color,
              animationDelay: star.delay,
              animationDuration: star.duration
            }}
          />
        ))}
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <TextAnimate
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6"
            >
              Launch a Conversation with Me
            </TextAnimate>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl lg:max-w-3xl mx-auto px-4">
              I am always excited to work on innovative projects and collaborate with like-minded individuals. 
              Whether you have a specific project in mind or just want to discuss ideas, I love to hear from you.
            </p>
          </div>
        </BlurFade>

        {/* Contact Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Side - Contact Information */}
          <BlurFade delay={0.2}>
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-slate-900/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-6 lg:mb-8">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Connect With Me</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((item, index) => (
                    <BlurFade key={index} delay={0.3 + index * 0.1}>
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-slate-400 text-xs sm:text-sm">{item.label}</p>
                          {item.link ? (
                            <a 
                              href={item.link}
                              className="text-sm sm:text-base text-white font-medium hover:text-blue-400 transition-colors break-all"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm sm:text-base text-white font-medium break-all">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <BlurFade delay={0.5}>
                <div className="bg-slate-900/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Follow My Journey</h4>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-slate-800/80 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-slate-700/80 ${social.color}`}
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </BlurFade>
            </div>
          </BlurFade>

          {/* Right Side - Contact Form */}
          <BlurFade delay={0.3}>
            <div className="bg-slate-900/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6 lg:mb-8">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Send Message to Space</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-slate-800/80 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-slate-800/80 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-slate-800/80 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative cursor-pointer rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium backdrop-blur-xl border transition-shadow duration-300 ease-in-out hover:shadow bg-gradient-to-r from-purple-600 to-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-sm sm:text-base">Launching...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm sm:text-base">🚀 Send Message to Space</span>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </BlurFade>
        </div>

        {/* Footer */}
        <BlurFade delay={0.6}>
          <footer className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-slate-700/50">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  FaradayBanana
                </h4>
              </div>
              <p className="text-sm sm:text-base text-slate-400 max-w-xs sm:max-w-md mx-auto px-4">
                Creating digital experiences in the cosmic realm
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-500">
                <p>© 2025 FaradayBanana. All rights reserved.</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    Back to Top
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </BlurFade>
      </div>
    </div>
  );
};

export default ContactSection;
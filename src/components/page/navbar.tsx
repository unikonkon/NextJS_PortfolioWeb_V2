import React, { useState, useEffect } from 'react'
import { Menu, X, Rocket, Code, Briefcase, Mail, Star, BookOpen } from 'lucide-react'
import { BlurFade } from '@/components/magicui/blur-fade'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items for sections
  const navItems = [
    { id: 'hero', label: 'Home', icon: Rocket },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // External page link
  const externalLinks = [
    { href: '/knowledge', label: 'Knowledge', icon: BookOpen },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BlurFade delay={0.1}>
      <nav className={`fixed top-3 mx-8 rounded-xl left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a18]/85 backdrop-blur-2xl border border-purple-500/8 shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                 <Image src="/person.png" alt="logo" width={30} height={30} className="opacity-90" />
                {/* Subtle floating particles */}
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-purple-400/50 rounded-full sprite-blink"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-400/40 rounded-full sprite-blink"></div>
              </div>
              <span className="text-xl font-medium bg-gradient-to-r from-purple-300/90 to-cyan-300/90 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-cyan-200 transition-all duration-500">
                FaradayBanana
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 group ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600/80 to-cyan-600/80 text-white shadow-lg shadow-purple-500/15'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <Icon className={`w-4 h-4 transition-transform duration-500 ${isActive ? 'scale-105' : 'group-hover:scale-105'}`} />
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400/60 rounded-full"></div>
                      )}
                    </button>
                  );
                })}
                
                {/* External Links */}
                {externalLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 group text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    >
                      <Icon className="w-4 h-4 transition-transform duration-500 group-hover:scale-105" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-500"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 ease-out ${
            isOpen
              ? 'max-h-96 opacity-100 pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-[#0a0a18]/90 backdrop-blur-2xl rounded-lg border border-purple-500/8 mt-2 p-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <BlurFade key={item.id} delay={0.1 + index * 0.05}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600/80 to-cyan-600/80 text-white shadow-lg shadow-purple-500/10'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <Icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'scale-105' : ''}`} />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 bg-cyan-400/60 rounded-full"></div>
                      )}
                    </button>
                  </BlurFade>
                );
              })}

              {/* External Links in Mobile */}
              {externalLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <BlurFade key={link.href} delay={0.1 + (navItems.length + index) * 0.05}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-500 text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    >
                      <Icon className="w-5 h-5 transition-transform duration-500" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subtle cosmic line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

        {/* Subtle floating stars */}
        <div className="absolute top-2 left-1/4 w-0.5 h-0.5 bg-purple-400/40 rounded-full sprite-blink"></div>
        <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-cyan-400/30 rounded-full sprite-blink"></div>
        <div className="absolute top-1 right-1/4 w-0.5 h-0.5 bg-purple-300/25 rounded-full sprite-blink"></div>
      </nav>
    </BlurFade>
  );
};

export default Navbar;

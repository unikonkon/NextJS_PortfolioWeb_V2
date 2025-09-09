import React, { useEffect, useState, useCallback } from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import Image from 'next/image'
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react'

type ColorScheme = 'orange' | 'orangeLight' | 'blue' | 'yellow' | 'red' | 'green' | 'purple' | 'indigo';

interface PersonalProject {
  title: string;
  role: string;
  description: string;
  image: string;
  slideImages?: string[]; // เพิ่ม slideImages สำหรับ modal
  technologies: string[];
  githubUrl?: string;
  githubUrlFrontend?: string;
  githubUrlBackend?: string;
  demoUrl?: string;
  featured?: boolean;
  colorScheme: ColorScheme;
}

interface WorkProject {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: string;
  colorScheme: ColorScheme;
  demoUrl?: string;
}

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'work'>('personal');
  const [selectedProject, setSelectedProject] = useState<PersonalProject | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [stars, setStars] = useState<Array<{ id: number, left: string, top: string, size: string, color: string, delay: string, duration: string }>>([]);

  useEffect(() => {
    // Generate stars only on client side to prevent hydration mismatch
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      color: ['#ffffff', '#00cfff', '#a259ff', '#7df9ff'][Math.floor(Math.random() * 4)],
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 2 + 2}s`
    }));
    setStars(generatedStars);
  }, []);

  // Modal functions
  const openModal = (project: PersonalProject) => {
    if (project.slideImages && project.slideImages.length > 0) {
      setSelectedProject(project);
      setCurrentSlide(0);
    }
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setCurrentSlide(0);
  }, []);

  const nextSlide = useCallback(() => {
    if (selectedProject && selectedProject.slideImages) {
      setCurrentSlide((prev) =>
        prev === selectedProject.slideImages!.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (selectedProject && selectedProject.slideImages) {
      setCurrentSlide((prev) =>
        prev === 0 ? selectedProject.slideImages!.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          break;
        case 'Escape':
          e.preventDefault();
          closeModal();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextSlide, prevSlide, closeModal]);

  // Personal projects data
  const personalProjects: PersonalProject[] = [
    {
      title: "📰 Crypto Sentiment Analysis",
      role: "Full Stack Developer",
      description: "Analyze the sentiment of cryptocurrencies using AI Gemini API to make better investment decisions. updates with RSS feeds from major crypto news sources.",
      image: "/project/CryptoSentiment1.png",
      slideImages: [
        "/project/CryptoSentiment1.png",
        "/project/CryptoSentiment2.png",
        "/project/CryptoSentiment3.png",
        "/project/CryptoSentiment4.png",
        "/project/CryptoSentiment5.png",
        "/project/CryptoSentiment6.png",
        "/project/CryptoSentiment7.png",
        "/project/CryptoSentiment8.png",
        "/project/CryptoSentiment9.png",
        "/project/CryptoSentiment10.png",
        "/project/CryptoSentiment11.png",
        "/project/CryptoSentiment12.png",
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Google Gemini API", "TailwindCSS", "NestJS", "Three.js"],
      githubUrlFrontend: "https://github.com/unikonkon/FrontEnd_useNestJS_CryptoSentimentAnalysis",
      githubUrlBackend: "https://github.com/unikonkon/BackEnd_NestJS_CryptoSentimentAnalysis",
      demoUrl: "https://crypto-sentiment-analysis-ten.vercel.app/",
      featured: true,
      colorScheme: "orangeLight" as const
    },
    {
      title: "📰 Crypto News Analysis",
      role: "Full Stack Developer",
      description: "AI-powered crypto news aggregator with sentiment analysis and trending score using Google Gemini API. Real-time updates with RSS feeds from major crypto news sources.",
      image: "/project/CryptoNews3.png",
      slideImages: [
        "/project/CryptoNews1.png",
        "/project/CryptoNews2.png",
        "/project/CryptoNews3.png",
        "/project/CryptoNews4.png",
        "/project/CryptoNews5.png",
        "/project/CryptoNews6.png",
        "/project/CryptoNews7.png",
        "/project/CryptoNews8.png"
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Google Gemini API", "TailwindCSS", "RSS Parser"],
      githubUrl: "https://github.com/unikonkon/NextJS_Crypto_News_Aggregator",
      demoUrl: "https://crypto-news-aggregator-alpha.vercel.app/",
      featured: true,
      colorScheme: "orange" as const
    },
    {
      title: "🎵 WebRecord Sound App",
      role: "Full Stack Developer",
      description: "Browser-based audio recording with IndexedDB storage, Firebase auth, and privacy-first approach.",
      image: "/project/project WebRecord1.png",
      slideImages: [
        "/project/project WebRecord1.png",
        "/project/project WebRecord2.png",
        "/project/project WebRecord3.png",
        "/project/project WebRecord4.png",
        "/project/project WebRecord5.png",
        "/project/project WebRecord6.png"
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "IndexedDB"],
      githubUrl: "https://github.com/unikonkon/React_WebRecord",
      demoUrl: "https://voice-record-phi.vercel.app/",
      featured: true,
      colorScheme: "blue" as const
    },
    {
      title: "📈 CryptoTracker",
      role: "Front-End Developer",
      description: "Modern cryptocurrency tracking with categorized views, search functionality, and 7-day price charts.",
      image: "/project/project CryptoTracker.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Recharts"],
      githubUrl: "https://github.com/unikonkon/NextJS_CryptoTracker",
      demoUrl: "https://crypto-tracker-drab-eta.vercel.app/",
      colorScheme: "yellow" as const
    },
    {
      title: "🎬 Netflix Clone",
      role: "Front-End Developer",
      description: "Responsive Netflix clone with modern UI/UX, movie browsing, and server-side rendering.",
      image: "/project/project Netflix.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/unikonkon/NextJS_Netflix_App",
      demoUrl: "https://next-js-netflix-app-5egp.vercel.app/",
      colorScheme: "red" as const
    },
    {
      title: "🗣️ Text-to-Speech App",
      role: "Front-End Developer",
      description: "Web application for text-to-speech conversion with voice selection and multi-language support.",
      image: "/project/project texttospeech.png",
      technologies: ["Next.js", "TypeScript", "Web Speech API"],
      githubUrl: "https://github.com/unikonkon/NextJS_Text-to-Speech-App",
      demoUrl: "https://text-to-speech-app-kappa.vercel.app/",
      colorScheme: "green" as const
    },
    {
      title: "🇹🇭 PyThaiTTS App",
      role: "Full Stack Developer",
      description: "Full-stack Thai text-to-speech with FastAPI backend and PyThaiTTS integration.",
      image: "/project/project PyThaiTTS texttospeech.png",
      technologies: ["Next.js", "FastAPI", "Python", "PyThaiTTS"],
      githubUrl: "https://github.com/unikonkon/NextJS_Text-to-Speech-for-PyThaiTTS",
      colorScheme: "purple" as const
    },
    {
      title: "💼 Portfolio V1",
      role: "Front-End Developer",
      description: "Clean and minimalist portfolio website with responsive design principles.",
      image: "/project/project webport1.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Three.js"],
      githubUrl: "https://github.com/unikonkon/NextJs_WebProtfolio",
      demoUrl: "https://faradaybanana.vercel.app/",
      colorScheme: "indigo" as const
    }
  ];

  // Work projects data
  const workProjects: WorkProject[] = [
    {
      title: "ACT Project",
      role: "Full Stack Developer",
      description: "Full-stack development with data fetching from multiple sources, risk assessment logic, and Excel exports.",
      technologies: ["JavaScript", "TypeScript", "React", "Elasticsearch", "Express", "GitLab", "Jenkins", "Postman", "Ant Design"],
      features: [
        "Update the API for fetching data from the web",
        "Update the API for fetching data from the Kibana database",
        "Update the front-end view to reflect data from MA and the new database data sent",
        "Write Python logic for project risk assessment",
        "Redesign the flow for fetching data from 3 web pages: EGP, DBD, GOV",
        "Update the API for fetching data from the 3 web pages (EGP, DBD, GOV) based on the previous version",
        "Set up Jenkins processes to run commands for fetching project and company data",
        "Implement code paths for project and company data as required",
        "Create an Excel export for the required project and company data"
      ],
      icon: "📊",
      colorScheme: "yellow" as const
    },
    {
      title: "ACT Phase 2",
      role: "Full Stack Developer",
      description: "Enhanced project with advanced data fetching flows, database storage, and modern web interface.",
      technologies: ["JavaScript", "TypeScript", "Next.js", "Nodejs", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman", "Puppeteer", "Ant Design"],
      features: [
        "Design the flow for fetching project and company data from 3 web pages: EGP, DBD, and GOV",
        "Develop an API to fetch project data from the 3 web pages (EGP, DBD, GOV) and store it in the database",
        "Set up a Jenkins process to run commands for fetching project and company data",
        "Develop the web view for the front-end of Phase 2"
      ],
      icon: "🚀",
      colorScheme: "purple" as const,
      demoUrl: "https://actai.co/"
    },
    {
      title: "Iapp Speech Flow",
      role: "Full Stack Developer",
      description: "Mobile-to-web migration with Electron desktop app deployment for cross-platform compatibility.",
      technologies: ["JavaScript", "TypeScript", "Next.js", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman", "NextUI", "TailwindCSS", "Electron"],
      features: [
        "Plan the development of Iapp Speech Flow for Web and design the workflow",
        "Convert the mobile code into a web format using Next.js",
        "Design the code flow for Iapp Speech Flow on the Web",
        "Build the application as an Electron app for macOS and Windows"
      ],
      icon: "💬",
      colorScheme: "green" as const
    },
    {
      title: "NBTC - Drone Data Transmission",
      role: "Backend Developer",
      description: "Developed a Proxy API for transmitting drone data to mobile and web platforms, ensuring secure and compliant data transmission with NBTC regulations",
      technologies: ["JavaScript", "TypeScript", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman"],
      features: [
        "Developed an API for transmitting drone data to both mobile and web platforms, ensuring data is transmitted securely and in compliance with NBTC regulations",
        "Provided real-time logging and error handling to track ensure the integrity of data during transmission",
        "Presented the API functionality to the client, explaining how the API works and ensuring they understand how it complies with NBTC regulations"
      ],
      icon: "🚁",
      colorScheme: "blue" as const
    }
  ];

  const getColorSchemeClasses = (colorScheme: ColorScheme) => {
    const schemes = {
      orange: {
        gradient: "from-blue-600 to-cyan-600",
        border: "border-orange-500/30",
        bg: "bg-orange-900/20",
        text: "text-orange-200",
        accent: "text-blue-400"
      },
      orangeLight: {
        gradient: "from-blue-600 to-cyan-600",
        border: "border-orange-500/30",
        bg: "bg-orange-100/20",
        text: "text-orange-500",
        accent: "text-blue-400"
      },
      blue: {
        gradient: "from-blue-600 to-cyan-600",
        border: "border-blue-500/30",
        bg: "bg-blue-900/20",
        text: "text-blue-200",
        accent: "text-blue-400"
      },
      yellow: {
        gradient: "from-green-600 to-emerald-600",
        border: "border-yellow-500/30",
        bg: "bg-yellow-900/20",
        text: "text-yellow-200",
        accent: "text-green-400"
      },
      red: {
        gradient: "from-green-600 to-emerald-600",
        border: "border-red-500/30",
        bg: "bg-red-900/20",
        text: "text-red-200",
        accent: "text-green-400"
      },
      green: {
        gradient: "from-green-600 to-emerald-600",
        border: "border-green-500/30",
        bg: "bg-green-900/20",
        text: "text-green-200",
        accent: "text-green-400"
      },
      purple: {
        gradient: "from-purple-600 to-violet-600",
        border: "border-purple-500/30",
        bg: "bg-purple-900/20",
        text: "text-purple-200",
        accent: "text-blue-400"
      },
      indigo: {
        gradient: "from-green-600 to-emerald-600",
        border: "border-indigo-500/30",
        bg: "bg-indigo-900/20",
        text: "text-indigo-200",
        accent: "text-green-400"
      }
    };
    return schemes[colorScheme];
  };

  // Image Modal Component
  const ImageModal = () => {
    if (!selectedProject || !selectedProject.slideImages) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={closeModal}
      >
        <div
          className="max-w-5xl max-h-[100vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div className="relative">
            <Image
              src={selectedProject.slideImages[currentSlide]}
              alt={`${selectedProject.title} - Slide ${currentSlide + 1}`}
              width={1200}
              height={800}
              className="object-contain max-h-[100vh] rounded-lg"
            />

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white rounded-full text-sm">
              {currentSlide + 1} / {selectedProject.slideImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
            {selectedProject.slideImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden transition-all ${index === currentSlide ? 'border-blue-500' : 'border-gray-600 hover:border-gray-400'
                  }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

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
      </div>

      <div className="relative max-w-7xl mx-auto pt-[50px] mb-20">

        {/* Image Modal */}
        <ImageModal />

        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore my journey through personal experiments and professional achievements
            </p>
          </div>
        </BlurFade>

        {/* Tab Navigation */}
        <BlurFade delay={0.2}>
          <div className="flex justify-center mb-12">
            <div className="flex bg-slate-800/50 backdrop-blur-lg rounded-2xl p-2 border border-purple-500/20">
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${activeTab === 'personal'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                Personal Projects
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${activeTab === 'work'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                Work Projects
              </button>
            </div>
          </div>
        </BlurFade>

        {/* Personal Projects */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => {
              const colors = getColorSchemeClasses(project.colorScheme);
              return (
                <BlurFade key={project.title} delay={0.09 + index * 0.1}>

                  <div className={`p-6 h-full flex flex-col bg-slate-900/90 backdrop-blur-lg rounded-lg border ${colors.border}`}>
                    {/* Project Image */}
                    <div
                      className={`relative w-full h-48 mb-4 rounded-lg overflow-hidden ${project.slideImages ? 'cursor-pointer group' : ''
                        }`}
                      onClick={() => project.slideImages && openModal(project)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {project.slideImages && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {project.featured && (
                        <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                      )}
                      {project.slideImages && (
                        <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                          {project.slideImages.length} images
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium mb-3 ${colors.accent}`}>
                        {project.role}
                      </p>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    {project.githubUrl && (
                      <div className="flex gap-3 mt-auto">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 rounded-lg transition-colors duration-200 text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm`}
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        )}
                      </div>
                    )}

                    {project.githubUrlFrontend && project.githubUrlBackend && (
                      <div className="flex gap-3 mt-auto">
                        <a
                          href={project.githubUrlFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 rounded-lg transition-colors duration-200 text-sm"
                        >
                          <Github size={16} />
                          Frontend
                        </a>
                        <a
                          href={project.githubUrlBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 rounded-lg transition-colors duration-200 text-sm"
                        >
                          <Github size={16} />
                          Backend
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm`}
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        )}
                      </div>
                    )}

                  </div>
                </BlurFade>
              );
            })}
          </div>
        )}

        {/* Work Projects */}
        {activeTab === 'work' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workProjects.map((project, index) => {
              const colors = getColorSchemeClasses(project.colorScheme);
              return (
                <BlurFade key={project.title} delay={0.09 + index * 0.1}>

                  <div className={`p-8 h-full flex flex-col bg-slate-900/90 backdrop-blur-lg rounded-lg border ${colors.border}`}>
                    {/* Project Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl">{project.icon}</div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>
                          {project.title}
                        </h3>
                        <p className={`text-lg font-medium mb-3 ${colors.accent}`}>
                          {project.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-slate-200 font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-sm rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-6">
                      <h4 className="text-slate-200 font-semibold mb-3">Key Features & Responsibilities:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.border} border mt-2 flex-shrink-0`}></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Demo Link */}
                    {project.demoUrl && (
                      <div className="mt-auto">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-200`}
                        >
                          <ExternalLink size={18} />
                          View Project
                        </a>
                      </div>
                    )}
                  </div>
                </BlurFade>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;